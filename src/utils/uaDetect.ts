declare global {
    interface Navigator {
        getBattery: any;
        oscpu: any;
    }

    interface Window {
        InstallTrigger?: any;
        ApplePaySession?: any;
        chrome?: any;
    }
}

interface UaDetect {
    isChrome: boolean;
    isWechat: boolean;
    isAndroid: boolean;
    isIos: boolean;
    isSafari: boolean;

    os: string;
    osVersion: string;
}

type Rule = string | Function;

interface RuleBag {
    [key: string]: Rule;
}


/**
 * 必须遵循顺序
 */
const browsers: RuleBag = {
    edge: 'Edg',
    safari: (ua: string, window: Window) => { return !!window.ApplePaySession },
    chrome: (ua: string, window: Window) => { return !!window.chrome; },
    firefox: (ua: string, window: Window) => { return !!window.InstallTrigger; },
    wechat: 'MicroMessenger'
};

const operatingSystems: RuleBag = {
    ios: 'iPad|iPhone|iPod',
    android: 'android',
    windows: 'Win',
    mac: 'Mac'
}

/**
 * 必须遵循顺序
 */
const browserVersions: RuleBag = {
    wechat: 'MicroMessenger/[[VERSION]]',
    edge: 'Edg/[[VERSION]]',
    chrome: 'Chrome/[[VERSION]]',
    firefoxIos: 'FxiOS/[[VERSION]]', // Firefox ios
    chromeIos: 'CriOS/[[VERSION]]',
    safari: 'Version/[[VERSION]]',
}

const models: RuleBag = {
    model: (ua: string) => {
        if (ua.indexOf('Android') !== -1) {
            const tmpFields = ua.replace('; wv', '').split('; ').pop();
            if (tmpFields) {
                return tmpFields.split(' Build')[0].replace('(', '');
            }
        } else {
            const tmp = ua.split('; ')[0];
            return tmp.slice(tmp.indexOf('(') + 1);
        }
    }
}

const osVersion = {
    version: (ua: string) => {
        const start = ua.indexOf('(') + 1;
        let end = ua.indexOf(') AppleWebKit');
        if (ua.indexOf(') Gecko') !== -1) {
            end = ua.indexOf(') Gecko');
        }
        const fields = ua.substring(start, end);

        if (ua.indexOf('Android') !== -1) {
            return fields.split('; ')[1];
        } else {
            if (window.navigator.oscpu) return window.navigator.oscpu

            if (ua.indexOf('Windows') !== -1) {
                return ua.split('; ')[0].replace('(', '');
            } else {
                const tmpFields = fields.split('; ').pop();
                if (tmpFields) {
                    const lastParts = tmpFields
                        .replace(' like Mac OS X', '')
                        .split(' ');
                    return lastParts[lastParts.length - 1].replace(
                        /_/g,
                        '.',
                    );
                }
            }
        }
    }
}

const keywords = {
    VERSION: '([\\w._\\+]+)',
    ANY: '(\\S*)'
}

class UaDetect {

    protected ua: string = navigator.userAgent;

    public properties: any = null;

    public constructor() {
        this.detect();
    }

    is(name: string): boolean {
        const properties = this.detect();

        for (const property in properties) {
            const value = properties[property];

            if (value && name.toLocaleLowerCase() === value.toLocaleLowerCase()) return true;
        }

        return false;
    }

    get(name: string): string {
        const properties = this.detect();

        return properties[name] || null;
    }

    detect(): any {
        if (this.properties) return this.properties;

        this.properties = {
            browser: this.handleRule(browsers),
            browserVersion: this.handleRule(browserVersions),
            os: this.handleRule(operatingSystems),
            osVersion: this.handleRule(osVersion),
            model: this.handleRule(models),
        }

        return this.properties;
    }

    handleRule(rules: RuleBag) {
        for (const key in rules) {
            let rule = rules[key];

            if (!rule || rule.length === 0) {
                continue;
            }

            if ((rule as any) instanceof Function) {
                const result = (rule as Function)(this.ua, window);
                if (result == false) continue;

                if (result === true) { return key; }

                return result;
            }

            rule = rule as string;

            let match = false;

            for (const keyword in keywords) {
                if (rule.includes(keyword)) {
                    rule = rule.replace(`[[${keyword}]]`, (keywords as any)[keyword]);

                    match = true;
                }
            }

            if (match) {
                const result = this.ua.match((new RegExp(rule, 'i')));

                if (result && result[1]) {
                    return result[1];
                }
            } else if ((new RegExp(rule, 'i')).test(this.ua)) {
                return key
            }
        }
    }
}


const detect = new UaDetect();

const proxy = new Proxy(detect, {
    get(target: UaDetect, prop: string) {
        if ((target as any)[prop]) {
            return (target as any)[prop];
        } if (prop.startsWith('is')) {
            return target.is(prop.slice(2));
        } else {
            return target.get(prop);
        }
    }
});

export default proxy;