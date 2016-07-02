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
var HeroComponent = (function () {
    function HeroComponent($element, setElementBackgroundImage, setElementDimensions) {
        var _this = this;
        this.$element = $element;
        this.setElementBackgroundImage = setElementBackgroundImage;
        this.setElementDimensions = setElementDimensions;
        this.ngOnInit = function () {
            _this.setElementBackgroundImage(_this.$element, _this.heroImageUrl);
            _this.setElementDimensions(_this.$element, _this.height, _this.width);
        };
    }
    HeroComponent = __decorate([
        core_1.Component({
            template: require("./hero.component.html"),
            styles: [require("./hero.component.scss")],
            selector: "hero",
            inputs: ["@heroImageUrl", "@height", "@width"],
            transclude: true,
            viewProviders: ["$element", "setElementBackgroundImage", "setElementDimensions"],
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }), 
        __metadata('design:paramtypes', [Object, Object, Object])
    ], HeroComponent);
    return HeroComponent;
}());
exports.HeroComponent = HeroComponent;
//# sourceMappingURL=hero.component.js.map