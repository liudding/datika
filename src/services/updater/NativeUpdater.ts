import { Updater } from './definitions';
export default class NativeUpdater implements Updater {


    protected currentPackage: any;
    protected newVersion: any;

    /**
     * 检查更新
     * @returns 
     */
    async checkUpdate(): Promise<any> {
        return false;
    }

    async promptUserToUpdate(): Promise<any>{
        return true;
    }


    async download(): Promise<any> {
        //
    }

    async install(): Promise<string> {
        return '';
    }

    async apply(): Promise<any> {
        //
    }

    /**
     * 获取当前版本的信息
     */
    public async getCurrentPackage(): Promise<any>{
        // if (!this.currentPackage) {
        //     // read package metadata from local file

        //     let version = await Storage.get(STORAGE_KEY_LOCAL_VERSION)

        //     if (!version) {
        //         version = {
        //             version: process.env.VUE_APP_VERSION || '0.0.0',
        //             native_version: process.env.VUE_APP_NATIVE_VERSION || '1.2.2',
        //         }

        //         await Storage.set(STORAGE_KEY_LOCAL_VERSION, version);
        //     }

        //     this.currentPackage = version;
        // }


        // return this.currentPackage;
    }

    /**
     * 获取远程最新版本
     * @returns 
     */
    private async fetchRemoteVersion() {
        //
    }
}