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
var FlipCardBackComponent = (function () {
    function FlipCardBackComponent($element) {
        var _this = this;
        this.$element = $element;
        this.storeOnChange = function (state) { };
        this.ngOnInit = function () { _this.flipCard.ngOnChildInit({ component: _this }); };
    }
    FlipCardBackComponent = __decorate([
        core_1.Component({
            template: require("./flip-card-back.component.html"),
            selector: "flip-card-back",
            transclude: true,
            require: '^flipCard',
            viewProviders: ["$element"]
        }), 
        __metadata('design:paramtypes', [Object])
    ], FlipCardBackComponent);
    return FlipCardBackComponent;
}());
exports.FlipCardBackComponent = FlipCardBackComponent;
//# sourceMappingURL=flip-card-back.component.js.map