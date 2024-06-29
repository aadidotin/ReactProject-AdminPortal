
function CheckAuth() {
    const validToken = document.cookie.split("; ").find(row => row.startsWith("auth_token"))?.split("=")[1];

    return { validToken }
}

export default CheckAuth