import { Plugins } from '@capacitor/core';

const BaseStorage = Plugins.Storage;

export default class Storage {

    static async set(key: string, value: any): Promise<void> {
        return BaseStorage.set({
            key: key,
            value: JSON.stringify(value)
        });
    }

    static async get(key: string): Promise<any> {
        const ret = await BaseStorage.get({ key });
        return ret.value && JSON.parse(ret.value);
    }

    static async remove(key: string): Promise<void> {
        return await BaseStorage.remove({ key });
    }

    static async keys(): Promise<string[]> {
        const { keys } = await BaseStorage.keys();
        return keys;
    }

    static async clear(): Promise<void> {
        return BaseStorage.clear();
    }

}

