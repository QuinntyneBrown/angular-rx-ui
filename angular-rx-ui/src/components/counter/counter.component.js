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
var counter_action_creator_1 = require("./counter.action-creator");
var CounterComponent = (function () {
    function CounterComponent(counterActionCreator) {
        var _this = this;
        this.counterActionCreator = counterActionCreator;
        this.storeOnChange = function (store) { return _this.count = store.count || 0; };
        this.increment = function () { return _this.counterActionCreator.increment(); };
        this.decrement = function () { return _this.counterActionCreator.decrement(); };
    }
    CounterComponent = __decorate([
        core_1.Component({
            componentName: "counterComponent",
            template: require("./counter.component.html"),
            styles: [require("./counter.component.scss")],
            selector: "counter",
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            viewProviders: ["counterActionCreator"]
        }), 
        __metadata('design:paramtypes', [counter_action_creator_1.CounterActionCreator])
    ], CounterComponent);
    return CounterComponent;
}());
exports.CounterComponent = CounterComponent;
//# sourceMappingURL=counter.component.js.map