import { uuid } from '@/utils/uuid';
import ua from '@/utils/uaDetect'


function getUid(): string {
    if (typeof window !== 'undefined') {
        let uid = window.localStorage.getItem('_uuid');
        if (uid) {
            return uid;
        }

        uid = uuid();
        window.localStorage.setItem('_uuid', uid);
        return uid;
    }

    return uuid();
}

export function detect(): any {

    let client = 'browser';

    if (location.search.indexOf('source=pwa') > 0) {
        client = 'pwa';
    } else if (navigator.userAgent.toLocaleLowerCase().indexOf('youce') >= 0) {
        client = 'app';
    }

    const uaFields = ua.properties;

    return {
        client,
        model: uaFields.model,
        platform: <const>'web',
        operatingSystem: uaFields.operatingSystem,
        osVersion: uaFields.osVersion,
        manufacturer: navigator.vendor,
        uuid: getUid(),
        browser: uaFields.browser,
        browserVersion: uaFields.browserVersion,
    };
}

export function env() {
    const env = localStorage.getItem('ENVIRONMENT')
    if (env) return JSON.parse(env);

    const infos = detect();

    localStorage.setItem('ENVIRONMENT', JSON.stringify(infos));

    return infos;
}

/**
 * app, browser, pwa
 * @returns string
 */
export function client() {
    return env().client;
}


export function isPwa() {
    return client() === 'pwa';
}

export function isBrowser() {
    return !isPwa() && (client() === 'browser' || client() === 'web');
}

export function isApp() {
    return client() === 'app';
}

export function isInWechat() {
    return ua.isWechat;
}

export function isSafari() {
    return ua.isSafari;
}

export function isAndroid() {
    return ua.isAndroid;
}

export function isIos() {

    return ua.isIos;
}

const envInfos = detect()
localStorage.setItem('ENVIRONMENT', JSON.stringify(envInfos));
