"use strict";
exports.setElementDimension = function (dimension, augmentedJQuery, value) {
    if (value && (value.indexOf("%") > -1 || value.indexOf("px") > -1)) {
        augmentedJQuery[0].style[dimension] = "" + value;
    }
    else {
        augmentedJQuery[0].style[dimension] = value + "px";
    }
};
angular.module("setElementDimension", [])
    .value("setElementDimension", exports.setElementDimension);
//# sourceMappingURL=set-element-dimension.js.map