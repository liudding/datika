export function detect(): string {
    if (location.search.indexOf('source=pwa') > 0) {
        return 'pwa';
    }

    const ua = navigator.userAgent;

    if (/MicroMessenger/i.test(ua) || /weixin/i.test(ua) || /wechat/i.test(ua)) {
        return 'wechat';
    }


    return 'browser';
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
    let env = localStorage.getItem('env')
    if (env) return env;

    env = detect();

    localStorage.setItem('env', env);

    return env;
}


export function isPwa() {
    return env() === 'pwa';
}

export function isBrowser() {
    return env() === 'browser';
}

export function isApp() {
    return false;
}

export function isInWechat() {
    return true;
}

export function isAndroid() {
    return os() === 'android'
}

export function isIos() {
    return os() === 'ios';
}

/**
 * pwa  
 * browser
 * wechat
 * app
 * 
 * ios/android
 */


env();