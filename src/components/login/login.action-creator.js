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
var login_service_1 = require("./login.service");
var login_actions_1 = require("./login.actions");
var LoginActionCreator = (function () {
    function LoginActionCreator(dispatcher, loginService, guid) {
        var _this = this;
        this.dispatcher = dispatcher;
        this.loginService = loginService;
        this.guid = guid;
        this.tryToLogin = function (options) {
            var newId = _this.guid();
            _this.loginService.tryToLogin({
                data: {
                    username: options.username,
                    password: options.password
                }
            }).then(function (results) {
                _this.dispatcher.dispatch(new login_actions_1.UserLoggedInAction(newId, results));
            });
            return newId;
        };
        this.loginSuccess = function () { return _this.dispatcher.dispatch(new login_actions_1.LoginSuccessAction()); };
        this.logout = function () { return _this.dispatcher.dispatch(new login_actions_1.LogoutAction()); };
    }
    LoginActionCreator = __decorate([
        core_1.Service({
            serviceName: "loginActionCreator",
            viewProviders: ["dispatcher", "loginService", "guid"]
        }), 
        __metadata('design:paramtypes', [Object, login_service_1.LoginService, Object])
    ], LoginActionCreator);
    return LoginActionCreator;
}());
exports.LoginActionCreator = LoginActionCreator;
//# sourceMappingURL=login.action-creator.js.map