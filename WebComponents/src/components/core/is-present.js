"use strict";
function isPresent(obj) {
    return obj !== undefined && obj !== null;
}
exports.isPresent = isPresent;
angular.module("isPresent", []).value("isPresent", isPresent);
//# sourceMappingURL=is-present.js.map