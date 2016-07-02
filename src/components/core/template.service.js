"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("../core");
var Template = (function () {
    function Template($http, $q, $templateCache) {
        var _this = this;
        this.$http = $http;
        this.$q = $q;
        this.$templateCache = $templateCache;
        this.get = function (options) {
            var deferred = _this.$q.defer();
            var cacheResult = _this.$templateCache.get(options.templateUrl);
            if (cacheResult) {
                if (Array.isArray(cacheResult))
                    deferred.resolve(cacheResult[1]);
                deferred.resolve(cacheResult);
                return deferred.promise;
            }
            _this.$http.get(options.templateUrl, { cache: _this.$templateCache }).then(function (response) {
                deferred.resolve(response.data);
            });
            return deferred.promise;
        };
    }
    Template = __decorate([
        core_1.Service({
            serviceName: "template",
            viewProviders: ["$http", "$q", "$templateCache"]
        }), 
        __metadata('design:paramtypes', [Function, Function, Object])
    ], Template);
    return Template;
}());
exports.Template = Template;
var app = angular.module("template", []);
core_1.provide(app, Template);
//# sourceMappingURL=template.service.js.map