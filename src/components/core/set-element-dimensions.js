"use strict";
var set_element_dimension_1 = require("./set-element-dimension");
exports.setElementDimensions = function (augmentedJQuery, height, width) {
    set_element_dimension_1.setElementDimension("height", augmentedJQuery, height);
    set_element_dimension_1.setElementDimension("width", augmentedJQuery, width);
};
angular.module("setElementDimensions", [])
    .value("setElementDimensions", exports.setElementDimensions);
//# sourceMappingURL=set-element-dimensions.js.map