export const getFromUrlSync = (options) => {
    let responseText = "";
    let xhr = new XMLHttpRequest();
    xhr.open("GET", options.url, false);
    xhr.onload = (e) => {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                responseText = xhr.responseText;
            }
            else {
                console.error(xhr.statusText);
            }
        }
    };
    xhr.send(null);
    return responseText;
}

angular.module("getFromUrlSync",[]).value("getFromUrlSync", getFromUrlSync);