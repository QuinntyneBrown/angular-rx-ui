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
var RememberMeAction = (function () {
    function RememberMeAction(username) {
        this.username = username;
    }
    RememberMeAction = __decorate([
        core_1.Action({
            type: "login.rememberMeAction"
        }), 
        __metadata('design:paramtypes', [String])
    ], RememberMeAction);
    return RememberMeAction;
}());
exports.RememberMeAction = RememberMeAction;
var LogoutAction = (function () {
    function LogoutAction() {
    }
    LogoutAction = __decorate([
        core_1.Action({
            type: "login.logoutAction"
        }), 
        __metadata('design:paramtypes', [])
    ], LogoutAction);
    return LogoutAction;
}());
exports.LogoutAction = LogoutAction;
var LoginSuccessAction = (function () {
    function LoginSuccessAction() {
    }
    LoginSuccessAction = __decorate([
        core_1.Action({
            type: "login.loginSuccessAction"
        }), 
        __metadata('design:paramtypes', [])
    ], LoginSuccessAction);
    return LoginSuccessAction;
}());
exports.LoginSuccessAction = LoginSuccessAction;
var UserLoggedInAction = (function () {
    function UserLoggedInAction(id, data) {
        this.id = id;
        this.data = data;
    }
    UserLoggedInAction = __decorate([
        core_1.Action({
            type: "login.userLoggedInAction"
        }), 
        __metadata('design:paramtypes', [Object, Object])
    ], UserLoggedInAction);
    return UserLoggedInAction;
}());
exports.UserLoggedInAction = UserLoggedInAction;
//# sourceMappingURL=login.actions.js.map