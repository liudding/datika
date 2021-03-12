import { Plugins } from '@capacitor/core';

const BaseStorage = Plugins.Storage;

export default class Storage {

    static async set(key: string, value: any) {
        return BaseStorage.set({
            key: 'user',
            value: JSON.stringify(value)
        });
    }

    static async get(key: string) {
        const ret = await BaseStorage.get({ key });
        return ret.value && JSON.parse(ret.value);
    }

    static async remove(key: string) {
        return await BaseStorage.remove({ key });
    }

    static async keys() {
        const { keys } = await BaseStorage.keys();
        return keys;
    }

    static async clear() {
        return BaseStorage.clear();
    }

}

