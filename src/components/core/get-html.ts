export var getHtml: any = (who: HTMLElement, deep: boolean) => {
    if (!who || !who.tagName) return '';
    var txt: any, ax: any, el: any = document.createElement("div");
    el.appendChild(who.cloneNode(false));
    txt = el.innerHTML;
    if (deep) {
        ax = txt.indexOf('>') + 1;
        txt = txt.substring(0, ax) + who.innerHTML + txt.substring(ax);
    }
    el = null;
    return txt;
}

angular.module("getHtml", []).value("getHtml", getHtml);