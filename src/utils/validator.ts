
function isMobile(text: string): boolean {
    return /^(?:(?:\+|00)86)?1[3-9]\d{9}$/.test(text);
}

function isValidPassword(text: string): boolean {
    return text.length >= 6;
}


export default {
    isMobile,
    isValidPassword
}