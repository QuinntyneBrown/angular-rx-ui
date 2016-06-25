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
var tabs_action_creator_1 = require("./tabs.action-creator");
var TabTitleComponent = (function () {
    function TabTitleComponent($attrs, tabsActionCreator) {
        var _this = this;
        this.$attrs = $attrs;
        this.tabsActionCreator = tabsActionCreator;
        this.storeOnChange = function (state) { };
        this.ngOnInit = function () { return _this.tabsActionCreator.tabChildLoaded(); };
        this.onTabTitleClick = function () {
            _this.tabsActionCreator.setCurrentTab({
                tabName: _this.$attrs.$$element[0].getAttribute("tabs-name"),
                index: _this.$attrs.$$element[0].getAttribute("index")
            });
        };
    }
    TabTitleComponent = __decorate([
        core_1.Component({
            template: require("./tab-title.component.html"),
            styles: [require("./tab-title.component.scss")],
            selector: "tab-title",
            transclude: true,
            viewProviders: ["$attrs", "tabsActionCreator"]
        }), 
        __metadata('design:paramtypes', [Object, tabs_action_creator_1.TabsActionCreator])
    ], TabTitleComponent);
    return TabTitleComponent;
}());
exports.TabTitleComponent = TabTitleComponent;
//# sourceMappingURL=tab-title.component.js.map