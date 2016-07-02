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
var action_creator_1 = require("../core/action-creator");
var UserActionCreator = (function (_super) {
    __extends(UserActionCreator, _super);
    function UserActionCreator($location, dispatcher, userService, guid) {
        var _this = this;
        _super.call(this, $location, userService, dispatcher, guid, AddOrUpdateUserAction, AllUsersAction, RemoveUserAction, SetCurrentUserAction);
        this.addOrUpdateSuccess = function (options) { return _this.dispatcher.dispatch(new AddOrUpdateUserSuccessAction(options.entity)); };
        this.currentUserRemoved = function () { return _this.dispatcher.dispatch(new CurrentUserRemovedAction()); };
        this.current = function (options) {
            var id = _this.guid();
            _this.service.current()
                .then(function (results) {
                _this.dispatcher.dispatch(new CurrentUserAction(id, results));
            });
            return id;
        };
    }
    UserActionCreator = __decorate([
        core_1.Service({
            serviceName: "userActionCreator",
            viewProviders: ["$location", "dispatcher", "userService", "guid"]
        }), 
        __metadata('design:paramtypes', [Object, Object, Object, Object])
    ], UserActionCreator);
    return UserActionCreator;
}(action_creator_1.BaseActionCreator));
exports.UserActionCreator = UserActionCreator;
var AddOrUpdateUserAction = (function () {
    function AddOrUpdateUserAction(id, entity) {
        this.id = id;
        this.entity = entity;
    }
    return AddOrUpdateUserAction;
}());
exports.AddOrUpdateUserAction = AddOrUpdateUserAction;
var AllUsersAction = (function () {
    function AllUsersAction(id, entities) {
        this.id = id;
        this.entities = entities;
    }
    return AllUsersAction;
}());
exports.AllUsersAction = AllUsersAction;
var RemoveUserAction = (function () {
    function RemoveUserAction(id, entity) {
        this.id = id;
        this.entity = entity;
    }
    return RemoveUserAction;
}());
exports.RemoveUserAction = RemoveUserAction;
var UsersFilterAction = (function () {
    function UsersFilterAction(id, term) {
        this.id = id;
        this.term = term;
    }
    return UsersFilterAction;
}());
exports.UsersFilterAction = UsersFilterAction;
var SetCurrentUserAction = (function () {
    function SetCurrentUserAction(entity) {
        this.entity = entity;
    }
    return SetCurrentUserAction;
}());
exports.SetCurrentUserAction = SetCurrentUserAction;
var AddOrUpdateUserSuccessAction = (function () {
    function AddOrUpdateUserSuccessAction(entity) {
        this.entity = entity;
    }
    return AddOrUpdateUserSuccessAction;
}());
exports.AddOrUpdateUserSuccessAction = AddOrUpdateUserSuccessAction;
var CurrentUserRemovedAction = (function () {
    function CurrentUserRemovedAction() {
    }
    return CurrentUserRemovedAction;
}());
exports.CurrentUserRemovedAction = CurrentUserRemovedAction;
var CurrentUserAction = (function () {
    function CurrentUserAction(id, entity) {
        this.id = id;
        this.entity = entity;
    }
    return CurrentUserAction;
}());
exports.CurrentUserAction = CurrentUserAction;
//# sourceMappingURL=user.actions.js.map