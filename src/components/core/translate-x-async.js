"use strict";
var $q = angular.injector(['ng']).get("$q");
exports.translateXAsync = function (options) {
    var deferred = $q.defer();
    angular.element(options.element).css({
        "-moz-transform": "translateX(" + options.x + "px)",
        "-webkit-transform": "translateX(" + options.x + "px)",
        "-ms-transform": "translateX(" + options.x + "px)",
        "-transform": "translateX(" + options.x + "px)"
    });
    options.element.addEventListener('transitionend', resolve, false);
    function resolve() {
        options.element.removeEventListener('transitionend', resolve);
        deferred.resolve();
    }
    return deferred.promise;
};
angular.module("translateXAsync", []).value("translateXAsync", exports.translateXAsync);
//# sourceMappingURL=translate-x-async.js.map