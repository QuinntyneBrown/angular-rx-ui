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
var tabs_actions_1 = require("./tabs.actions");
var TabsComponent = (function () {
    function TabsComponent($attrs, $element, tabsActionCreator) {
        var _this = this;
        this.$attrs = $attrs;
        this.$element = $element;
        this.tabsActionCreator = tabsActionCreator;
        this.storeOnChange = function (state) {
            _this.currentIndex = state.tabIndex[_this.$attrs["tabsName"]] || 0;
            if (state.lastTriggeredByAction === tabs_actions_1.SetCurrentTabAction) {
                _this.updateCurrentTab();
            }
            if (state.lastTriggeredByAction === tabs_actions_1.TabChildLoadedAction) {
                _this._titleElements = angular.element(_this.$element[0].querySelectorAll('.tab-title'));
                _this._contentElements = angular.element(_this.$element[0].querySelectorAll('.tab-content'));
                for (var i = 0; i < _this.titleElements.length; i++) {
                    _this.titleElements[i].setAttribute("index", i.toString());
                    _this.titleElements[i].setAttribute("tabs-name", _this.$attrs["tabsName"]);
                }
                _this.updateCurrentTab();
            }
        };
        this.updateCurrentTab = function () {
            for (var i = 0; i < _this.titleElements.length; i++) {
                if (i != _this.currentIndex) {
                    _this.titleElements[i].classList.remove("tabs-titleselected");
                }
                else {
                    _this.titleElements[i].classList.add("tabs-titleselected");
                }
            }
            for (var i = 0; i < _this.contentElements.length; i++) {
                if (i != _this.currentIndex) {
                    _this.contentElements[i].classList.add("tabs-contentInActive");
                }
                else {
                    _this.contentElements[i].classList.remove("tabs-contentInActive");
                }
            }
        };
        this.currentIndex = 0;
    }
    Object.defineProperty(TabsComponent.prototype, "titleElements", {
        get: function () { return this._titleElements; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TabsComponent.prototype, "contentElements", {
        get: function () { return this._contentElements; },
        enumerable: true,
        configurable: true
    });
    TabsComponent = __decorate([
        core_1.Component({
            template: require("./tabs.component.html"),
            styles: [require("./tabs.component.scss")],
            selector: "tabs",
            transclude: {
                'title': '?tabTitle',
                'content': '?tabContent'
            },
            viewProviders: [
                '$attrs',
                '$element',
                'tabsActionCreator'
            ]
        }), 
        __metadata('design:paramtypes', [Object, Object, tabs_action_creator_1.TabsActionCreator])
    ], TabsComponent);
    return TabsComponent;
}());
exports.TabsComponent = TabsComponent;
//# sourceMappingURL=tabs.component.js.map