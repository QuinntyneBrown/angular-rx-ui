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
var breakpoints_actions_1 = require("./breakpoints.actions");
var BreakpointsActionCreator = (function () {
    function BreakpointsActionCreator($window, dispatcher, guid, invokeAsync) {
        var _this = this;
        this.$window = $window;
        this.dispatcher = dispatcher;
        this.guid = guid;
        this.invokeAsync = invokeAsync;
        this.windowResize = function () {
            if (_this._windowInnerWidth != _this.$window.innerWidth)
                _this.dispatcher.dispatch(new breakpoints_actions_1.WindowResizeAction(0, _this.$window.innerWidth));
            _this._windowInnerWidth = _this.$window.innerWidth;
        };
        angular.element($window).bind("resize", this.windowResize);
    }
    BreakpointsActionCreator = __decorate([
        core_1.Service({
            serviceName: "breakpointsActionCreator",
            viewProviders: ["$window", "dispatcher", "guid", "invokeAsync"]
        }), 
        __metadata('design:paramtypes', [Object, Object, Object, Object])
    ], BreakpointsActionCreator);
    return BreakpointsActionCreator;
}());
exports.BreakpointsActionCreator = BreakpointsActionCreator;
//# sourceMappingURL=breakpoints.action-creator.js.map