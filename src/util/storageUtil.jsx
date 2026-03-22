

const getLocalStorageString = (name) => {
    if (localStorage.getItem(name)) return localStorage.getItem(name);
    return null;
}
const setLocalStorageString = (name, data) => {
    localStorage.setItem(name, data);
}

const getLocalStorage = (name) => {
    if (localStorage.getItem(name)) return JSON.parse(localStorage.getItem(name));
    return null;
}
const setLocalStorage = (name, data) => {
    localStorage.setItem(name, JSON.stringify(data));
}
const removeLocalStorage = (name) => {
    localStorage.removeItem(name);
}


// viết hàm lưu cookie
const saveCookie = (name, value, days) => {
    const expires = new Date(Date.now() + days * 24 * 60 * 60 * 1000).toUTCString();
    document.cookie = `${name}=${value}; expires=${expires}; path=/`;
}

const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}
const removeCookie = (name) => {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
}
export { getLocalStorage, setLocalStorage, removeLocalStorage, getLocalStorageString, setLocalStorageString, saveCookie, getCookie, removeCookie };