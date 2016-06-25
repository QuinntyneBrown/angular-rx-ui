"use strict";
/**
 * Base Service for CRUD: Expects a resultful endpoint available
 */
var BaseService = (function () {
    function BaseService($q, apiEndpoint, fetch) {
        this.$q = $q;
        this.apiEndpoint = apiEndpoint;
        this.fetch = fetch;
    }
    BaseService.prototype.get = function () {
        var deferred = this.$q.defer();
        this.fetch.fromCacheOrService({ method: "GET", url: this.baseUri + "/get" })
            .then(function (results) { return deferred.resolve(results.data); });
        return deferred.promise;
    };
    ;
    BaseService.prototype.getById = function (options) {
        var deferred = this.$q.defer();
        this.fetch.fromService({ method: "GET", url: this.baseUri + "/getById", params: { id: options.id } })
            .then(function (results) { return deferred.resolve(results.data); });
        return deferred.promise;
    };
    ;
    BaseService.prototype.add = function (options) {
        var deferred = this.$q.defer();
        this.fetch.fromService({ method: "POST", url: this.baseUri + "/add", data: options.data })
            .then(function (results) { return deferred.resolve(results.data); });
        return deferred.promise;
    };
    ;
    BaseService.prototype.update = function (options) {
        var deferred = this.$q.defer();
        this.fetch.fromService({ method: "PUT", url: this.baseUri + "/update", data: options.data })
            .then(function (results) { return deferred.resolve(results.data); });
        return deferred.promise;
    };
    ;
    BaseService.prototype.remove = function (options) {
        var deferred = this.$q.defer();
        this.fetch.fromService({ method: "DELETE", url: this.baseUri + "/remove", params: { id: options.id } })
            .then(function (results) { return deferred.resolve(results.data); });
        return deferred.promise;
    };
    ;
    Object.defineProperty(BaseService.prototype, "baseUri", {
        get: function () { throw new Error("Not Implemented"); },
        enumerable: true,
        configurable: true
    });
    return BaseService;
}());
exports.BaseService = BaseService;
//# sourceMappingURL=service.js.map