import { Plugins } from "@capacitor/core";
import { HTTP } from '@ionic-native/http';
import semver from 'semver';
import { File } from '@ionic-native/file';
import Storage from '@/utils/storage';

import { Zip as ZipPlugin } from 'capacitor-plugin-zip';

const Zip = new ZipPlugin();

const { WebView, Device } = Plugins;

import { Updater } from './definitions'


const HOST_URL = 'https://meety-dev.menco.cn';
const RELEASE_VERSIONS_URL = HOST_URL + '/versions.json';

const STORAGE_KEY_LOCAL_VERSION = 'LOCAL_VERSION';

const STORAGE_KEY_NEW_VERSION_PATH = 'new_version_path';

export default class WebUpdater implements Updater {

    protected currentPackage: any;
    protected newPackage: any;

    // 安装包路径 /packages/<version>.zip
    // 存储路径 /ionic_built_snapshots/<version>

    /**
     * 获取当前版本的信息
     */
    public async getCurrentPackage() {
        if (!this.currentPackage) {
            let version = await Storage.get(STORAGE_KEY_LOCAL_VERSION)

            if (!version) {
                const appInfo = await Device.getInfo();

                version = {
                    version: process.env.VUE_APP_VERSION || '0.0.0',
                    native_version: appInfo.appVersion,
                }

                await Storage.set(STORAGE_KEY_LOCAL_VERSION, version);
            }

            this.currentPackage = version;
        }


        return this.currentPackage;
    }

    /**
     * 获取远程可用版本
     * @returns 
     */
    private async fetchRemoteVersions() {
        const resp = await HTTP.get(RELEASE_VERSIONS_URL, {}, {});

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

    /**
     * 检查更新
     * @returns 
     */
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

    /**
     * 下载远程版本到本地
     * @returns 
     */
    async download() {
        const uri = encodeURI(this.newPackage.download_url);

        const path = 'packages/' + this.newPackage.version + '.zip';
        const absolutePath = File.dataDirectory + '' + path;

        try {
            const entry = await HTTP.downloadFile(uri, {}, {}, absolutePath);

            console.log("download complete: ", entry, entry.toURL());

            this.newPackage.downloaded = {
                path,
                abs_path: absolutePath,
                url: entry.toURL()
            }

            // TODO: store downloaded package info

            return {
                path,
                url: entry.toURL(),
            }

        } catch (error) {
            console.log("download error source " + error.source);
            console.log("download error target " + error.target);
            console.log("download error code" + error.code);
        }
    }

    /**
     * 解压安装包，并放入安装路径
     */
    async install() {
        const newPath = File.dataDirectory + 'ionic_built_snapshots/' + this.newPackage.version;

        console.log('BEGIN INSTALL WEB VERSION');

        try {
            await Zip.unzip({
                src: this.newPackage.downloaded.url,
                dest: newPath
            })

        } catch (error) {
            console.error('====', error);

            return;
        }


        const startPath = newPath.replace('file://', '');

        await this.storeNewPath(startPath);

        console.log('NEW WEB VERSION INSTALLED', startPath);
    }

    /**
     * 立即启用新版本
     * @returns 
     */
    async apply() {
       
        const newPath = await this.getNewPath();

        if (!newPath) {
            return false;
        }


        WebView.setServerBasePath({
            path: newPath
        });

        console.log('NEW WEB VERSION APPLIED');

        WebView.persistServerBasePath();

        await this.clearNewPath();

        return true;
    }

    /**
     * 自动更新版本
     */
    async auto() {

        this.apply();

        const newVersion = await this.checkUpdate();

        if (!newVersion) {
            return;
        }

        await this.download();

        await this.install();
    }

    private async getNewPath() {
        return Storage.get(STORAGE_KEY_NEW_VERSION_PATH);
    }

    private async storeNewPath(startPath: string) {
        return Storage.set(STORAGE_KEY_NEW_VERSION_PATH, startPath);
    }

    private async clearNewPath() {
        return Storage.remove(STORAGE_KEY_NEW_VERSION_PATH);
    }


}

