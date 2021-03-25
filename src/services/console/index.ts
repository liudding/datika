
declare global {
    interface Window { eruda: any }
}


export default class Console {

    public static load(): void {
        const url = 'https://cdn.jsdelivr.net/npm/eruda';

        const head = document.getElementsByTagName('HEAD').item(0);
        const scriptElement = document.createElement('script');
        scriptElement.type = 'text/javascript'
        scriptElement.src = url;
        scriptElement.onload = () => {
            window.eruda && window.eruda.init();
        }

        scriptElement.onerror = () => {
            console.error('Console load failed')
        }

        head?.appendChild(scriptElement)
    }

}