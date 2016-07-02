"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var UserService = (function (_super) {
    __extends(UserService, _super);
    function UserService($q, apiEndpoint, fetch) {
        var _this = this;
        _super.call(this, $q, apiEndpoint, fetch);
        this.current = function (options) {
            var deferred = _this.$q.defer();
            _this.fetch.fromService({ method: "GET", url: _this.baseUri + "/current" }).then(function (results) {
                deferred.resolve(results.data);
            }).catch(function (error) {
                deferred.resolve(error);
            });
            return deferred.promise;
        };
    }
    Object.defineProperty(UserService.prototype, "baseUri", {
        get: function () { return this.apiEndpoint.getBaseUrl() + "/user"; },
        enumerable: true,
        configurable: true
    });
    UserService = __decorate([
        core_1.Injectable(),
        core_1.Service({
            serviceName: "userService",
            viewProviders: ["$q", "apiEndpoint", "fetch"]
        }), 
        __metadata('design:paramtypes', [Function, Object, Object])
    ], UserService);
    return UserService;
}(core_1.BaseService));
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map