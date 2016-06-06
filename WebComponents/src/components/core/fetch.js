"use strict";
var Fetch = (function () {
    function Fetch($http, $q, localStorageManager) {
        var _this = this;
        this.$http = $http;
        this.$q = $q;
        this.localStorageManager = localStorageManager;
        this.inMemoryCache = {};
        this.fromService = function (options) {
            var deferred = _this.$q.defer();
            _this.$http({ method: options.method, url: options.url, data: options.data, params: options.params, headers: options.headers }).then(function (results) {
                deferred.resolve(results);
            }).catch(function (error) {
                deferred.reject(error);
            });
            return deferred.promise;
        };
        this.fromCacheOrService = function (options) {
            var deferred = _this.$q.defer();
            var cachedData = _this.localStorageManager.get({ name: options.url });
            if (!cachedData) {
                _this.fromService(options).then(function (results) {
                    deferred.resolve(results);
                }).catch(function (error) {
                    deferred.reject(error);
                });
            }
            else {
                deferred.resolve(cachedData.value);
            }
            return deferred.promise;
        };
    }
    Object.defineProperty(Fetch.prototype, "bodyNativeElement", {
        get: function () {
            return document.getElementsByTagName("body")[0];
        },
        enumerable: true,
        configurable: true
    });
    return Fetch;
}());
exports.Fetch = Fetch;
angular.module("fetch", ["localStorageManager"]).service("fetch", ["$http", "$q", "localStorageManager", Fetch]);
//# sourceMappingURL=fetch.js.map