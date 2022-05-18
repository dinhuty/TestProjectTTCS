export function SaveTokenInStorage(token) {
    localStorage.setItem('User',JSON.stringify(token))
}