"use strict";
exports.getHtml = function (who, deep) {
    if (!who || !who.tagName)
        return '';
    var txt, ax, el = document.createElement("div");
    el.appendChild(who.cloneNode(false));
    txt = el.innerHTML;
    if (deep) {
        ax = txt.indexOf('>') + 1;
        txt = txt.substring(0, ax) + who.innerHTML + txt.substring(ax);
    }
    el = null;
    return txt;
};
angular.module("getHtml", []).value("getHtml", exports.getHtml);
//# sourceMappingURL=get-html.js.map