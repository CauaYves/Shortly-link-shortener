export function saveToken(token) {
    console.log(token)
    const acessToken = localStorage.setItem("token", token)
    return acessToken
}

export function getToken(key) {
    const token = localStorage.getItem(key)
    return token
}