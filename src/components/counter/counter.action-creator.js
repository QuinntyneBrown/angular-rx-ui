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
var counter_actions_1 = require("./counter.actions");
var CounterActionCreator = (function () {
    function CounterActionCreator(dispatcher, guid) {
        var _this = this;
        this.dispatcher = dispatcher;
        this.guid = guid;
        this.increment = function () { return _this.dispatcher.dispatch(new counter_actions_1.Increment()); };
        this.decrement = function () { return _this.dispatcher.dispatch(new counter_actions_1.Decrement()); };
    }
    CounterActionCreator = __decorate([
        core_1.Service({
            serviceName: "counterActionCreator",
            viewProviders: ["dispatcher", "guid"]
        }), 
        __metadata('design:paramtypes', [Object, Object])
    ], CounterActionCreator);
    return CounterActionCreator;
}());
exports.CounterActionCreator = CounterActionCreator;
//# sourceMappingURL=counter.action-creator.js.map