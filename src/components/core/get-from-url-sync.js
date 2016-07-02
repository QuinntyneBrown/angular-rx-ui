"use strict";
exports.getFromUrlSync = function (options) {
    var responseText = "";
    var xhr = new XMLHttpRequest();
    xhr.open("GET", options.url, false);
    xhr.onload = function (e) {
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
};
angular.module("getFromUrlSync", []).value("getFromUrlSync", exports.getFromUrlSync);
//# sourceMappingURL=get-from-url-sync.js.map