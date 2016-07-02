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
var actions = require("./user.actions");
var user_model_1 = require("./user.model");
var UsersContainerComponent = (function () {
    function UsersContainerComponent($location, $routeParams, userActionCreator, _invokeAsync) {
        var _this = this;
        this.$location = $location;
        this.$routeParams = $routeParams;
        this.userActionCreator = userActionCreator;
        this._invokeAsync = _invokeAsync;
        this.storeOnChange = function (state) {
            _this.entities = state.users;
            if (state.lastTriggeredByAction instanceof actions.SetCurrentUserAction && !state.lastTriggeredByAction.entity)
                _this.$location.path("/admin/users");
            if (state.lastTriggeredByAction instanceof actions.SetCurrentUserAction && state.lastTriggeredByAction.entity)
                _this.$location.path("/admin/user/edit/" + state.lastTriggeredByAction.entity.id);
            if (state.lastTriggeredByAction instanceof actions.AddOrUpdateUserAction)
                _this.entity = new user_model_1.User();
            if (state.lastTriggeredByAction instanceof actions.RemoveUserAction && _this.entity && _this.entity.id) {
                _this.entity = core_1.pluck({ value: Number(_this.$routeParams["userId"]), items: _this.entities });
                if (Object.keys(_this.entity).length === 0) {
                    _this.$location.path("/admin/users");
                }
            }
        };
        this.ngOnInit = function () {
            if (_this.$routeParams["userId"]) {
                _this.entity = core_1.pluck({ value: Number(_this.$routeParams["userId"]), items: _this.entities });
            }
            else {
                _this.entity = new user_model_1.User();
            }
        };
        this.edit = function (entity) { return _this.userActionCreator.edit(entity); };
        this.remove = function (entity) { return _this.userActionCreator.remove(entity); };
        this.create = function (entity) { return _this.userActionCreator.create(); };
        this.addOrUpdate = function (options) {
            _this._invokeAsync({
                action: _this.userActionCreator.addOrUpdate,
                params: { data: options.data }
            }).then(function () {
                if (_this.$location.path() === "/admin/users") {
                    _this.entity = new user_model_1.User();
                }
                else {
                    _this.$location.path("/admin/users");
                }
            });
        };
    }
    UsersContainerComponent = __decorate([
        core_1.Component({
            template: require("./users-container.component.html"),
            styles: [require("./users-container.component.scss")],
            selector: "users-container",
            viewProviders: ["$location", "$routeParams", "userActionCreator", "invokeAsync"],
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }),
        core_1.CanActivate(["$q", "$route", "invokeAsync", "userActionCreator", function ($q, $route, invokeAsync, userActionCreator) {
                var userId = $route.current.params.userId;
                var promises = [invokeAsync(userActionCreator.all)];
                if (userId) {
                    promises.push(invokeAsync({ action: userActionCreator.getById, params: { id: userId } }));
                }
                ;
                return $q.all(promises);
            }]), 
        __metadata('design:paramtypes', [Object, Object, actions.UserActionCreator, Object])
    ], UsersContainerComponent);
    return UsersContainerComponent;
}());
exports.UsersContainerComponent = UsersContainerComponent;
//# sourceMappingURL=users-container.component.js.map