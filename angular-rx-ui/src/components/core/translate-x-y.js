"use strict";
exports.translateXY = function (element, x, y) {
    angular.element(element).css({
        "-moz-transform": "translate(" + x + "px, " + y + "px)",
        "-webkit-transform": "translate(" + x + "px, " + y + "px)",
        "-ms-transform": "translate(" + x + "px, " + y + "px)",
        "-transform": "translate(" + x + "px, " + y + "px)"
    });
    return element;
};
angular.module("translateXY", []).value("translateXY", exports.translateXY);
//# sourceMappingURL=translate-x-y.js.map