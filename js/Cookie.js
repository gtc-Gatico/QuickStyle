let cookie = document.cookie;

function getCookie(key) {
    let cookies = cookie.split(";")
    let cookieEntity = cookies.filter(value => {
        let v = value.trim();
        return v.startsWith(key)
    })
    return cookieEntity[0] ? cookieEntity[0].trim().substr((key + "=").length) : "";
}

function setCookie(key, value) {
    let cookies = cookie.split(";")
    for (let i = 0; i < cookies.length; i++) {
        if (cookies[i].startsWith(key) != null) {
            cookies[i] = key + "=" + value
        }
    }
    document.cookie = cookies.join(";")
}

function clearCookie(key) {
    if (key != null || key !== undefined) {
        setCookie(key, "")
    } else {
        document.cookie = "";
    }
}