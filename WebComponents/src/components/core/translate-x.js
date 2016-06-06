"use strict";
exports.translateX = function (element, value) {
    angular.element(element).css({
        "-moz-transform": "translateX(" + value + "px)",
        "-webkit-transform": "translateX(" + value + "px)",
        "-ms-transform": "translateX(" + value + "px)",
        "-transform": "translateX(" + value + "px)"
    });
    return element;
};
angular.module("translateX", []).value("translateX", exports.translateX);
//# sourceMappingURL=translate-x.js.map