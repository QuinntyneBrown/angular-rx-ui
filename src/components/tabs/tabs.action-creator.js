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
var tabs_actions_1 = require("./tabs.actions");
var TabsActionCreator = (function () {
    function TabsActionCreator(dispatcher) {
        var _this = this;
        this.dispatcher = dispatcher;
        this.setCurrentTab = function (options) { return _this.dispatcher.dispatch(new tabs_actions_1.SetCurrentTabAction(options.tabName, options.index)); };
        this.tabChildLoaded = function () { return _this.dispatcher.dispatch(new tabs_actions_1.TabChildLoadedAction()); };
    }
    TabsActionCreator = __decorate([
        core_1.Service({
            serviceName: "tabsActionCreator",
            viewProviders: ["dispatcher"]
        }), 
        __metadata('design:paramtypes', [Object])
    ], TabsActionCreator);
    return TabsActionCreator;
}());
exports.TabsActionCreator = TabsActionCreator;
//# sourceMappingURL=tabs.action-creator.js.map