import { uuid } from '@/utils/uuid';
import ua from '@/utils/uaDetect'


declare global {
    interface Navigator {
        standalone?: any;
    }
}


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

    if ((window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone || location.search.indexOf('source=pwa') >= 0)) {
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

export function env(): any {
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
export function client(): string {
    return env().client;
}


export function isPwa(): boolean {
    return client() === 'pwa';
}

export function isBrowser(): boolean {
    return !isPwa() && (client() === 'browser' || client() === 'web');
}

export function isApp(): boolean {
    return client() === 'app';
}

export function isInWechat(): boolean {
    return ua.isWechat;
}

export function isSafari(): boolean {
    return ua.isSafari;
}

export function isAndroid(): boolean {
    return ua.isAndroid;
}

export function isIos(): boolean {

    return ua.isIos;
}

const envInfos = detect()
localStorage.setItem('ENVIRONMENT', JSON.stringify(envInfos));
