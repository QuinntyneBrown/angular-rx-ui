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
var carousel_actions_1 = require("./carousel.actions");
var CarouselActionCreator = (function () {
    function CarouselActionCreator(dispatcher, guid) {
        var _this = this;
        this.dispatcher = dispatcher;
        this.guid = guid;
        this.next = function () { return _this.dispatcher.dispatch(new carousel_actions_1.CarouselNextAction()); };
        this.previous = function () { return _this.dispatcher.dispatch(new carousel_actions_1.CarouselPreviousAction()); };
    }
    CarouselActionCreator = __decorate([
        core_1.Service({
            serviceName: "carouselActionCreator",
            viewProviders: ["dispatcher", "guid"]
        }), 
        __metadata('design:paramtypes', [Object, Object])
    ], CarouselActionCreator);
    return CarouselActionCreator;
}());
exports.CarouselActionCreator = CarouselActionCreator;
//# sourceMappingURL=carousel.action-creator.js.map