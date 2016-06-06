export var getX = (element: HTMLElement): number => {
    var transform = angular.element(element).css("transform");
    if (transform === "none") return 0;

    var result = JSON.parse(transform.replace(/^\w+\(/, "[").replace(/\)$/, "]"));

    return JSON.parse(transform.replace(/^\w+\(/, "[").replace(/\)$/, "]"))[4];
}
angular.module("getX",[]).value("getX", getX);