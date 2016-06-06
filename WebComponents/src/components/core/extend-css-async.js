"use strict";
var _q_1 = require("./$q");
exports.extendCssAsync = function (options) {
    return _q_1.$q.when(angular.extend(options.nativeHTMLElement.style, options.cssObject));
};
angular.module("extendCssAsync", []).value("extendCssAsync", exports.extendCssAsync);
//# sourceMappingURL=extend-css-async.js.map