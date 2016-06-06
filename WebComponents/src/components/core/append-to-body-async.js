"use strict";
var _q_1 = require("./$q");
/**
 * @description Append To Body Asynchrously
 * @param options
 */
exports.appendToBodyAsync = function (options) {
    var deferred = _q_1.$q.defer();
    document.body.appendChild(options.nativeElement);
    setTimeout(function () { deferred.resolve(); }, options.wait || 100);
    return deferred.promise;
};
angular.module("appendToBodyAsync", []).value("appendToBodyAsync", exports.appendToBodyAsync);
//# sourceMappingURL=append-to-body-async.js.map