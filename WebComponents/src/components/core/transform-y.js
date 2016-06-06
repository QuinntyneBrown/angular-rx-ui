"use strict";
exports.transformY = function (element, y) {
    angular.element(element).css({
        "-moz-transform": "translateY(" + y + "px)",
        "-webkit-transform": "translateY(" + y + "px)",
        "-ms-transform": "translateY(" + y + "px)",
        "-transform": "translateY(" + y + "px)"
    });
    return element;
};
angular.module("transformY", [])
    .value("transformY", exports.transformY);
//# sourceMappingURL=transform-y.js.map