
import Storage from '@/utils/storage';

import NativeUpdater from "./NativeUpdater";
import WebUpdater from "./WebUpdater";



// config
// 1. host
// 2. env/
// 3. key ?

const HOST_URL = 'https://meety-dev.menco.cn';

const STORAGE_KEY_LOCAL_VERSION = 'LOCAL_VERSION';

export default class UpdateManager {

    protected webUpdater: WebUpdater;
    protected nativeUpdater: NativeUpdater;

    protected currentPackage: any;
    protected newPackage: any;

    constructor() {
        this.webUpdater = new WebUpdater();
        this.nativeUpdater = new NativeUpdater();
    }

    // 安装包路径 /packages/<version>.zip
    // 存储路径 /releases/<version>

    /**
     * 获取当前版本的信息
     */
    public async getCurrentPackage() {
        if (!this.currentPackage) {
            // read package metadata from local file

            let version = await Storage.get(STORAGE_KEY_LOCAL_VERSION)

            if (!version) {
                version = {
                    version: process.env.VUE_APP_VERSION || '0.0.0',
                    native_version: process.env.VUE_APP_NATIVE_VERSION || '1.2.2',
                }

                await Storage.set(STORAGE_KEY_LOCAL_VERSION, version);
            }

            this.currentPackage = version;
        }


        return this.currentPackage;
    }


    /**
     * 检查更新
     * @returns 
     */
    async checkUpdate() {
        const nativeNewVersion = await this.nativeUpdater.checkUpdate();

        console.log('++++++++++', nativeNewVersion)

        if (nativeNewVersion) {
            // prompt user to update

            return {
                type: 'native',
                versionInfos: nativeNewVersion
            };
        }


        const webNewVersion = await this.webUpdater.checkUpdate();

        if (webNewVersion) {
            return {
                type: 'web',
                versionInfos: webNewVersion
            }
        }

        return false;
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
     * 自动更新版本
     */
    async auto() {

        const applied = await this.webUpdater.apply();

        console.log('++++ apply applied', applied);

        if (applied) {
            return;
        }

        const newVersion = await this.checkUpdate();

        console.log('++++ newversion', newVersion);

        if (!newVersion) {
            return;
        }

        if (newVersion.type === 'web') {
            await this.webUpdater.download();
            await this.webUpdater.install();
        } else if (newVersion.type === 'native') {
            const result = await this.nativeUpdater.promptUserToUpdate();

            if (!result) {
                return;
            }

            await this.nativeUpdater.download();

            await this.nativeUpdater.install();
        }
    }
}

