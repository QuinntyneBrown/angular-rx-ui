"use strict";
var _q_1 = require("./$q");
exports.setOpacityAsync = function (options) {
    var deferred = _q_1.$q.defer();
    if (options.nativeHtmlElement) {
        options.nativeHtmlElement.style.opacity = options.opacity;
        options.nativeHtmlElement.addEventListener('transitionend', resolve, false);
    }
    function resolve() {
        options.nativeHtmlElement.removeEventListener('transitionend', resolve);
        deferred.resolve();
    }
    return deferred.promise;
};
angular.module("setOpacityAsync", []).value("setOpacityAsync", exports.setOpacityAsync);
//# sourceMappingURL=set-opacity-async.js.map