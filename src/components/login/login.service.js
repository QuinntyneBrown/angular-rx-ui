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
var LoginService = (function () {
    function LoginService($q, apiEndpoint, fetch, formEncode) {
        var _this = this;
        this.$q = $q;
        this.apiEndpoint = apiEndpoint;
        this.fetch = fetch;
        this.formEncode = formEncode;
        this.tryToLogin = function (options) {
            var deferred = _this.$q.defer();
            angular.extend(options.data, { grant_type: "password" });
            var formEncodedData = _this.formEncode(options.data);
            var headers = { "Content-Type": "application/x-www-form-urlencoded" };
            _this.fetch.fromService({ method: "POST", url: _this.baseUri + "/token", data: formEncodedData, headers: headers }).then(function (results) {
                deferred.resolve(results.data);
            }).catch(function (error) {
                deferred.resolve(error);
            });
            return deferred.promise;
        };
    }
    Object.defineProperty(LoginService.prototype, "baseUri", {
        get: function () { return this.apiEndpoint.getBaseUrl() + "/user"; },
        enumerable: true,
        configurable: true
    });
    LoginService = __decorate([
        core_1.Service({
            serviceName: "loginService",
            viewProviders: ["$q", "apiEndpoint", "fetch", "formEncode"]
        }), 
        __metadata('design:paramtypes', [Function, Object, Object, Object])
    ], LoginService);
    return LoginService;
}());
exports.LoginService = LoginService;
//# sourceMappingURL=login.service.js.map