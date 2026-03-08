export const limitText = (text, maxText) => {
    let newText = text;
    if (text.length > maxText) {
        newText = text.slice(0, maxText) + '...';
    }
    return newText;
}
export function stringToSlug(str) {
    return str
        .toLowerCase()
        .normalize("NFD")                 // tách dấu
        .replace(/[\u0300-\u036f]/g, "") // xoá dấu
        .replace(/đ/g, "d")
        .replace(/[^a-z0-9\s-]/g, "")    // xoá ký tự đặc biệt
        .trim()
        .replace(/\s+/g, "-")            // space → -
        .replace(/-+/g, "-");            // bỏ -- dư
}