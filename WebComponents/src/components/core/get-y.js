"use strict";
exports.getY = function (element) {
    var transform = angular.element(element).css("transform");
    if (transform === "none")
        return 0;
    return JSON.parse(transform.replace(/^\w+\(/, "[").replace(/\)$/, "]"))[5];
};
angular.module("getY", [])
    .value("getY", exports.getY);
//# sourceMappingURL=get-y.js.map