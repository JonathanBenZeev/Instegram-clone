export const utilService = {
    saveToStorage,
    loadFromStorage
}



function saveToStorage(key: string, value: any) {
    localStorage[key] = JSON.stringify(value);
}

function loadFromStorage(key: string, defaultValue: any = null) {
    const value = localStorage[key] || defaultValue;
    return JSON.parse(value);
}