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
var TabContentComponent = (function () {
    function TabContentComponent(_tabsActionCreator) {
        var _this = this;
        this._tabsActionCreator = _tabsActionCreator;
        this.storeOnChange = function (state) { };
        this.ngOnInit = function () { return _this._tabsActionCreator.tabChildLoaded(); };
    }
    TabContentComponent = __decorate([
        core_1.Component({
            template: require("./tab-content.component.html"),
            styles: [require("./tab-content.component.scss")],
            selector: "tab-content",
            transclude: true,
            viewProviders: ["tabsActionCreator"],
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }), 
        __metadata('design:paramtypes', [tabs_action_creator_1.TabsActionCreator])
    ], TabContentComponent);
    return TabContentComponent;
}());
exports.TabContentComponent = TabContentComponent;
//# sourceMappingURL=tab-content.component.js.map