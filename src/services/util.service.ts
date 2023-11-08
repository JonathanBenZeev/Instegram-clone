export const utilService = {
    saveToStorage,
    loadFromStorage,
    makeId
}



function saveToStorage(key: string, value: any) {
    localStorage[key] = JSON.stringify(value);
}

function loadFromStorage(key: string, defaultValue: any = null) {
    const value = localStorage[key] || defaultValue;
    return JSON.parse(value);
}
function makeId(length = 5) {
    let text = ''
    const possible =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (let i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return text
  }
  