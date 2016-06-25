"use strict";
var $q = angular.injector(['ng']).get("$q");
/**
 * @description Append To Body Asynchrously
 * @param options
 */
exports.appendToBodyAsync = function (options) {
    var deferred = $q.defer();
    document.body.appendChild(options.nativeElement);
    setTimeout(function () { deferred.resolve(); }, options.wait || 100);
    return deferred.promise;
};
angular.module("appendToBodyAsync", []).value("appendToBodyAsync", exports.appendToBodyAsync);
//# sourceMappingURL=append-to-body-async.js.map