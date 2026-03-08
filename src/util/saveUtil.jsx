export const saveData = (data, name) => {
    localStorage.setItem(name, JSON.stringify(data));
}
export const getData = (name) => {
    if (localStorage.getItem(name)) return JSON.parse(localStorage.getItem(name));
    return null;
}