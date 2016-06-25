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
var PopoverActionCreator = (function () {
    function PopoverActionCreator($rootScope, dispatcher, guid) {
        var _this = this;
        this.$rootScope = $rootScope;
        this.dispatcher = dispatcher;
        this.guid = guid;
        this.open = function () { return _this.dispatcher.dispatch(new popover_actions_1.OpenPopoverAction()); };
        this.close = function () { return _this.dispatcher.dispatch(new popover_actions_1.ClosePopoverAction()); };
        $rootScope.$on("$routeChangeSuccess", this.close);
    }
    PopoverActionCreator = __decorate([
        core_1.Service({
            serviceName: "popoverActionCreator",
            viewProviders: ["$rootScope", "dispatcher", "guid"]
        }), 
        __metadata('design:paramtypes', [Object, Object, Object])
    ], PopoverActionCreator);
    return PopoverActionCreator;
}());
exports.PopoverActionCreator = PopoverActionCreator;
//# sourceMappingURL=popover.action-creator.js.map