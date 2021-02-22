
declare global {
    interface Window { eruda: any }
}


export default class Console {

    static load() {
        const url = '//cdn.jsdelivr.net/npm/eruda';

        const head = document.getElementsByTagName('HEAD').item(0);
        const scriptElement = document.createElement('script');
        scriptElement.type = 'text/javascript'
        scriptElement.src = url;
        scriptElement.onload = () => {
            window.eruda.init();
        }

        head?.appendChild(scriptElement)
    }

}