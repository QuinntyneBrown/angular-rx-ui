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
var login_action_creator_1 = require("./login.action-creator");
var LoginComponent = (function () {
    function LoginComponent(invokeAsync, loginActionCreator) {
        var _this = this;
        this.invokeAsync = invokeAsync;
        this.loginActionCreator = loginActionCreator;
        this.tryToLogin = function () {
            _this.invokeAsync({
                action: _this.loginActionCreator.tryToLogin,
                params: { username: _this.username, password: _this.password }
            }).then(function (results) {
                _this.loginActionCreator.loginSuccess();
            });
        };
    }
    LoginComponent = __decorate([
        core_1.Component({
            template: require("./login.component.html"),
            styles: [require("./login.component.scss")],
            selector: "login",
            viewProviders: ["invokeAsync", "loginActionCreator"]
        }), 
        __metadata('design:paramtypes', [Object, login_action_creator_1.LoginActionCreator])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map