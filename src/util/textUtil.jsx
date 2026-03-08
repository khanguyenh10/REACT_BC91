export const limitText = (text, maxText) => {
    let newText = text;
    if (text.length > maxText) {
        newText = text.slice(0, maxText) + '...';
    }
    return newText;
}