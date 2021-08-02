export function validateEmail (email) {
    const reg = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
    return reg.test(String(email).toLowerCase());
}

export function isEmptyStr(input) {
    return String(input).trim();
}
