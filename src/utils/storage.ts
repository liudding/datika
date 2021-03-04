import { Plugins } from '@capacitor/core';

const { Storage } = Plugins;

export async function setStorage(key: string, value: any) {
    await Storage.set({
        key: 'user',
        value: JSON.stringify(value)
    });
}

export async function getStorage(key: string) {
    const ret = await Storage.get({ key });
    return ret.value && JSON.parse(ret.value);
}

export async function removeStorage(key: string) {
    return await Storage.remove({ key });
}

export async function keys() {
    const { keys } = await Storage.keys();
    return keys;
}

export async function clear() {
    await Storage.clear();
}