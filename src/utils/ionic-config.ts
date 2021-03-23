import { isIos, isApp } from './env'

export default function config(): any {
    return {
        backButtonText: "",
        swipeBackEnabled: isIos() && isApp(),
        // animated: isIos() && isApp(),
    }
}