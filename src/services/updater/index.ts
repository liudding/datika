
import Storage from '@/utils/storage';

import NativeUpdater from "./NativeUpdater";
import WebUpdater from "./WebUpdater";



// config
// 1. host
// 2. env/
// 3. key ?

// const HOST_URL = 'https://meety-dev.menco.cn';

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
       //
    }


    /**
     * 检查更新
     * @returns 
     */
    async checkUpdate() {

        const nativeNewVersion = await this.nativeUpdater.checkUpdate();

        if (nativeNewVersion) {
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

        /**
         * 当再次启动时，应用更新
         */
        const applied = await this.webUpdater.apply();

        if (applied) {
            return;
        }

        const newVersion = await this.checkUpdate();


        if (!newVersion) {
            return;
        }

        console.log('NEW VERSION FOUND: ', newVersion.versionInfos.version, JSON.stringify(newVersion));

        if (newVersion.type === 'web') {
            await this.webUpdater.download();
            await this.webUpdater.install();
        } else if (newVersion.type === 'native') {
            const allowed = await this.nativeUpdater.promptUserToUpdate();

            if (!allowed) {
                return;
            }

            await this.nativeUpdater.download();

            await this.nativeUpdater.install();
        }
    }
}

