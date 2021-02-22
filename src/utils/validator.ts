
function isMobile(text: string) {
    return /^(?:(?:\+|00)86)?1[3-9]\d{9}$/.test(text);
}


export default {
    isMobile
}