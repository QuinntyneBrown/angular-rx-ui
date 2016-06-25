"use strict";
var $q = angular.injector(['ng']).get("$q");
exports.extendCssAsync = function (options) {
    return $q.when(angular.extend(options.nativeHTMLElement.style, options.cssObject));
};
angular.module("extendCssAsync", []).value("extendCssAsync", exports.extendCssAsync);
//# sourceMappingURL=extend-css-async.js.map