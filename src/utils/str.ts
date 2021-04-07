export default class Str {

    static ascending(str: string): string {
       return str.split('').sort((a: string, b: string) => {
            if (a > b) return 1;
            return -1;
        }).join('')
    }
}