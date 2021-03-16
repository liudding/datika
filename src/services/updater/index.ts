import { HTTP } from '@ionic-native/http';
import semver from 'semver';
import { File } from '@ionic-native/file';
// import { Zip } from '@ionic-native/zip';
import { Plugins, FilesystemDirectory, FilesystemEncoding } from "@capacitor/core";
import Storage from '@/utils/storage';
const { WebView, Filesystem } = Plugins;

import request from '@/utils/request'
import { isApp } from '@/utils/env';

import { Zip } from 'capacitor-plugin-zip';


// config
// 1. host
// 2. env/
// 3. key ?

const HOST_URL = 'https://meety-dev.menco.cn';
const RELEASE_VERSIONS_URL = HOST_URL + '/versions.json';

const KEY_LOCAL_VERSION = 'LOCAL_VERSION';

export default class Updater {

    protected currentPackage: any;
    protected newPackage: any;

    // 安装包路径 /packages/<version>.zip
    // 存储路径 /releases/<version>

    /**
     * 获取当前版本的信息
     */
    public async getCurrentPackage() {
        if (!this.currentPackage) {
            // read package metadata from local file

            let version = await Storage.get(KEY_LOCAL_VERSION)

            if (!version) {
                version = {
                    version: process.env.VUE_APP_VERSION,
                    native_version: process.env.VUE_APP_NATIVE_VERSION,
                }

                await Storage.set(KEY_LOCAL_VERSION, version);
            }

            this.currentPackage = version;
        }


        return this.currentPackage;
    }

    private async fetchRemoteVersions() {
        const  resp = await HTTP.get(RELEASE_VERSIONS_URL, {}, {});

        if (!resp.data) {
            return;
        }

        let versionInfos = resp.data as any;

        if (typeof versionInfos === 'string') {
            versionInfos = JSON.parse(versionInfos)
        }

        const versions = versionInfos.map((i: any) => {
            i.version = semver.valid(semver.coerce(i.version))
            return i;
        });

        return versions
    }

    async checkUpdate() {
        const versions = await this.fetchRemoteVersions()

        const currentVersion = await this.getCurrentPackage();

        let targetVersion;
        let hasNewNativeVersion = false;
        let nativeVersion;

        for (const version of versions) {
            if (!semver.gt(version.version, currentVersion.version)) {

                continue;
            }

            if (!semver.satisfies(currentVersion.native_version, version.native_versions)) {
                hasNewNativeVersion = true;

                if (!nativeVersion) nativeVersion = version;

                continue;
            }

            targetVersion = version;
            break;
        }

        if (!targetVersion && hasNewNativeVersion) {
            // 更新 native version
            return {
                type: 'native',
                version: nativeVersion
            };
        }


        if (!targetVersion) {
            return false
        }

        this.newPackage = targetVersion;

        return this.newPackage;
    }

    async blob2base64(blob: Blob): Promise<string> {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(blob);
            reader.onloadend = function () {
                const base64data = reader.result;
                console.log(base64data);

                resolve(base64data as string);
            }
        })

    }

    // 2. download
    async download() {

        this.newPackage.download_url = 'https://meety-dev.menco.cn/2.0.0.zip';

        const uri = encodeURI(this.newPackage.download_url);

        const path = 'packages/' + this.newPackage.version + '.zip';
        const absolutePath = File.dataDirectory + '' + path;

        try {

            if (isApp()) {
                const entry = await HTTP.downloadFile(uri, {}, {}, absolutePath);

                console.log("download complete: ", entry, entry.toURL());

                this.newPackage.downloaded = {
                    path,
                    ulr: entry.toURL()
                }


                return {
                    path,
                    url: entry.toURL(),
                }
            } else {
                const resp = await request({
                    url: uri,
                    method: 'post',
                    responseType: 'blob'
                })

                const data = await this.blob2base64(resp.data);

                Filesystem.writeFile({
                    path: path,
                    data: data,
                    directory: FilesystemDirectory.Data,
                })
            }


            // Storage.set('')

            // store package metadata to local file

        } catch (error) {
            console.log("download error source " + error.source);
            console.log("download error target " + error.target);
            console.log("download error code" + error.code);
        }
    }

    async install() {
        const newPath = '';

        console.log('============================= unzip =============================');
        console.log((window as any).JJzip, 'jjzip')


        try {
            // 1. unzip
            const result = await Zip.unzip({
                src: 'path/to/source.zip',
                dest: File.dataDirectory + 'releases/' + this.newPackage.version
            })

            console.log('====', result);

        } catch (error) {
            console.error('====', error);
        }



        // 2. replace app start path
        // WebView.setServerBasePath({
        //     path: newPath
        // });

        // WebView.persistServerBasePath();
    }
}

