// import { parseUa } from '@/utils/ua';
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

export  function detect(): any {

    let env = 'browser';

    if (location.search.indexOf('source=pwa') > 0) {
        env = 'pwa';
    }


    const uaFields = ua.properties;


    return {
        env,
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

export function os() {
    const ua = navigator.userAgent;

    if (/Android/i.test(ua)) {
        return 'android';
    }

    if (/iPhone/i.test(ua) || /iPad/i.test(ua) || /iPod/i.test(ua)) {
        return 'ios';
    }
}

export function env() {
    const env = localStorage.getItem('env')
    if (env) return env;

    // env = await detect();

    // localStorage.setItem('env', env);

    return env;
}


export function isPwa() {
    return env() === 'pwa';
}

export function isBrowser() {
    return env() === 'browser' || env() === 'web';
}

export function isApp() {
    return false;
}

export function isInWechat() {
    return ua.isWechat;
}

export function isAndroid() {
    return ua.isAndroid;
}

export function isIos() {
  
    return ua.isIos;
}

/**
 * pwa  
 * browser
 * wechat
 * app
 * 
 * ios/android
 */


detect()