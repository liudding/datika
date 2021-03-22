import { isIos, isApp } from './env'

export default function config() {
    return {
        backButtonText: "",
        swipeBackEnabled: isIos() && isApp(),
        // animated: isIos() && isApp(),
    }
}