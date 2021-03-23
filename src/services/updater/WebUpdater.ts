import { Plugins } from "@capacitor/core";
import { HTTP } from '@ionic-native/http';
import semver from 'semver';
import { File } from '@ionic-native/file';
import Storage from '@/utils/storage';

import { Zip as ZipPlugin } from 'capacitor-plugin-zip';
import { cleanDataDirectory } from './utils';

const Zip = new ZipPlugin();

const { WebView, Device } = Plugins;

import { Updater } from './definitions'


const HOST_URL = 'https://youcce-packages.oss-cn-shanghai.aliyuncs.com';
const RELEASE_VERSIONS_URL = HOST_URL + '/versions.json';

const STORAGE_KEY_CURRENT_VERSION = 'CURRENT_VERSION';
const STORAGE_KEY_NEW_VERSION = 'NEW_VERSION';

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
            let version = await Storage.get(STORAGE_KEY_CURRENT_VERSION)

            const appInfo = await Device.getInfo();

            if (!version) {

                version = {
                    version: process.env.VUE_APP_VERSION || '0.0.0',
                    nativeVersion: appInfo.appVersion,
                    installPath: null,
                    downloaded: null,
                }

                await this.storeCurrentVersion(version);
            }

            /**
             * 原生包更新，并不会更新本地存储的版本信息，所以每次都读取最新的 native app version
             */
            version.nativeVersion = appInfo.appVersion;

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

        for (const version of versions) {
            if (!semver.gt(version.version, currentVersion.version)) {

                continue;
            }

            if (!semver.satisfies(currentVersion.nativeVersion, version.nativeVersions || version.native_versions)) {
                continue;
            }

            targetVersion = version;
            break;
        }

        if (!targetVersion) {

            return false
        }

        targetVersion.downloadUrl = targetVersion.downloadUrl || targetVersion.download_url
        this.newPackage = targetVersion;

        return this.newPackage;
    }

    async blob2base64(blob: Blob): Promise<string> {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(blob);
            reader.onloadend = function () {
                const base64data = reader.result;

                resolve(base64data as string);
            }
        })

    }

    /**
     * 下载远程版本到本地
     * @returns 
     */
    async download() {
        // TODO: 避免重复下载

        if (this.newPackage.version === this.currentPackage.version) {
            return;
        }

        const uri = encodeURI(this.newPackage.downloadUrl);


        console.log('BEGIN DOWNLOAD WEB PACKAGE: ' + this.newPackage.version)

        try {

            const destDir = 'packages'
            const packagesDir = await cleanDataDirectory(destDir);
            const filePath = packagesDir + this.newPackage.version + '.zip';

            const entry = await HTTP.downloadFile(uri, {}, {}, filePath);

            console.log("PACKAGE DOWNLOADED INTO: " + entry.toURL());


            const downloadedInfo = {
                path: destDir + '.zip',
                url: entry.toURL(),
                version: this.newPackage.version
            }

            this.newPackage.downloaded = downloadedInfo

            await this.storeNewVersionInfo(this.newPackage);

            return downloadedInfo

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
        const releasePath = 'ionic_built_snapshots/' + this.newPackage.version;

        const newPath = await cleanDataDirectory(releasePath);

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

        this.newPackage.installedPath = startPath;

        await this.storeNewVersionInfo(this.newPackage);

        console.log('NEW WEB VERSION INSTALLED', startPath);
    }

    /**
     * 立即启用新版本
     * @returns 
     */
    async apply() {

        const newVersion = await this.getNewVersionInfo();

        if (!newVersion || !newVersion.installedPath) {
            return false;
        }


        WebView.setServerBasePath({
            path: newVersion.installedPath
        });

        console.log('NEW WEB VERSION APPLIED');

        WebView.persistServerBasePath();

        const currentVersion = await this.getCurrentPackage();

        currentVersion.version = newVersion.version;
        currentVersion.installedPath = newVersion.installedPath;

        await this.storeCurrentVersion(currentVersion);
        await this.clearNewVersionInfo();

        return true;
    }

    /**
     * 自动更新版本
     */
    // async auto() {

    //     /**
    //      * 当再次启动时，应用更新
    //      */
    //     await this.apply();

    //     const newVersion = await this.checkUpdate();

    //     if (!newVersion) {
    //         return;
    //     }

    //     await this.download();

    //     await this.install();
    // }

    private async storeNewVersionInfo(infos: any) {
        return Storage.set(STORAGE_KEY_NEW_VERSION, infos);
    }

    private async getNewVersionInfo() {
        return Storage.get(STORAGE_KEY_NEW_VERSION)
    }

    private async clearNewVersionInfo() {
        return Storage.remove(STORAGE_KEY_NEW_VERSION);
    }

    private async storeCurrentVersion(infos: any) {
        return Storage.set(STORAGE_KEY_CURRENT_VERSION, infos);
    }
}
