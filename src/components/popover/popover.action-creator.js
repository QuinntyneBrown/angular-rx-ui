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
var popover_actions_1 = require("./popover.actions");
var popover_service_1 = require("./popover.service");
var PopoverActionCreator = (function () {
    function PopoverActionCreator($rootScope, dispatcher, guid, popover) {
        var _this = this;
        this.$rootScope = $rootScope;
        this.dispatcher = dispatcher;
        this.guid = guid;
        this.popover = popover;
        this.open = function (options) {
            var guid = _this.guid();
            options.guid = guid;
            _this.popover.createInstance(options).then(function (instance) {
                instance.show().then(function () { return _this.dispatcher.dispatch(new popover_actions_1.PopoverOpenedAction(guid, instance)); });
            });
            return guid;
        };
        this.close = function (options) { return _this.dispatcher.dispatch(new popover_actions_1.ClosePopoverAction(options.guid)); };
        this.opened = function (options) {
        };
        this.closed = function (options) { return _this.dispatcher.dispatch(new popover_actions_1.PopoverClosedAction(options.id)); };
        $rootScope.$on("$routeChangeSuccess", this.close);
    }
    PopoverActionCreator = __decorate([
        core_1.Service({
            serviceName: "popoverActionCreator",
            viewProviders: ["$rootScope", "dispatcher", "guid", "popover"]
        }), 
        __metadata('design:paramtypes', [Object, Object, Object, popover_service_1.Popover])
    ], PopoverActionCreator);
    return PopoverActionCreator;
}());
exports.PopoverActionCreator = PopoverActionCreator;
//# sourceMappingURL=popover.action-creator.js.map