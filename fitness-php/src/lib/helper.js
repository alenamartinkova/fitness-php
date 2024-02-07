export function filterArrayByKey(array, key) {
    return array.find(item => item.text_key === key)?.value;
}

export function createMarkup(filteredText) {
    return { __html: filteredText };
}