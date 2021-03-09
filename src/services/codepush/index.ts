import { HTTP } from '@ionic-native/http';
import semver from 'semver';
import { File } from '@ionic-native/file';
import { Zip } from '@ionic-native/zip';
import { Capacitor } from '@capacitor/core';
import { Plugins } from "@capacitor/core";
const { WebView } = Plugins;


// config
// 1. host
// 2. env/
// 3. key ?

const HOST_URL = '';
const LATEST_RELEASE_URL = HOST_URL + '';

export default class CodePush {

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

            this.currentPackage = '';
        }


        return this.currentPackage;
    }


    async checkUpdate() {
        const resp = await HTTP.get(LATEST_RELEASE_URL, {
            currentVersion: ''
        }, {});

        const currentVersion = '';

        if (!semver.gt(resp.data.version, currentVersion)) {
            return false;
        }

        const pkg: any = {
            version: resp.data.version,
            label: resp.data.label,
            description: resp.data.description,
            isMandatory: resp.data.isMandatory,
            downloadUrl: resp.data.downloadUrl
        }

        this.newPackage = pkg;

        return pkg;
    }

    // 2. download
    async download() {
        const uri = encodeURI(this.newPackage.downloadUrl);

        const path = 'packages' + this.newPackage.version + '.zip';
        const absolutePath = File.dataDirectory + '/' + path;

        try {

            const entry = await HTTP.downloadFile(uri, {}, {}, absolutePath);

            console.log("download complete: ", entry, entry.toURL());


            // store package metadata to local file

        } catch (error) {
            console.log("download error source " + error.source);
            console.log("download error target " + error.target);
            console.log("download error code" + error.code);
        }
    }

    async install() {
        const newPath = '';

        // 1. unzip
        const result = await Zip.unzip('path/to/source.zip', newPath, (progress: any) => {
            console.log('Unzipping, ' + Math.round((progress.loaded / progress.total) * 100) + '%')
        })

        if (result === -1) {
            // error
        }

        // 2. replace app start path
        WebView.setServerBasePath({
            path: newPath
        });
    
        WebView.persistServerBasePath();
    }
}

