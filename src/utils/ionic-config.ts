import { isIos, isApp } from './env'

export default function config() {
    return {
        swipeBackEnabled: isIos() && isApp(),
        // animated: isIos() && isApp(),
    }
}