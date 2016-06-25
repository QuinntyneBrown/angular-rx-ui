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
var FlipCardComponent = (function () {
    function FlipCardComponent($attrs, $element) {
        var _this = this;
        this.$attrs = $attrs;
        this.$element = $element;
        this.ngOnInit = function () {
            _this.$element[0].style.height = _this.height;
            _this.$element[0].style.width = _this.width;
            _this.$element[0].addEventListener("ontouchstart", function () {
                _this.$element[0].classList.toggle('hover');
            });
        };
        this.ngOnChildInit = function (options) {
            var nativeElement = options.component.$element[0];
            nativeElement.style.height = _this.height;
            nativeElement.style.width = _this.width;
            _this.viewChildren.push(nativeElement);
            options.component.added = _this.added;
            options.component.toggleAdded = _this.toggleAdded;
            _this.components.push(options.component);
            if (_this.viewChildren.length == 2) {
                _this.viewChildren[0].style.backgroundColor = "#ECECEC";
                _this.viewChildren[1].style.backgroundColor = "#B32E31";
            }
        };
        this.toggleAdded = function (options) {
            _this.added = !_this.added;
            _this.components[1].added = _this.added;
        };
        this.added = false;
        this.viewChildren = [];
        this.components = [];
    }
    Object.defineProperty(FlipCardComponent.prototype, "height", {
        get: function () { return this.$attrs.height || "480px"; },
        set: function (value) { },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlipCardComponent.prototype, "width", {
        get: function () { return this.$attrs.width || "320px"; },
        set: function (value) { },
        enumerable: true,
        configurable: true
    });
    FlipCardComponent = __decorate([
        core_1.Component({
            template: require("./flip-card.component.html"),
            styleUrls: [require('./flip-card.component.scss')],
            transclude: {
                'front': '?flipCardFront',
                'back': '?flipCardBack'
            },
            selector: "flip-card",
            viewProviders: ["$attrs", "$element"],
            inputs: ['height?', 'width?', 'toggleAdded?', 'added?']
        }), 
        __metadata('design:paramtypes', [Object, Object])
    ], FlipCardComponent);
    return FlipCardComponent;
}());
exports.FlipCardComponent = FlipCardComponent;
//# sourceMappingURL=flip-card.component.js.map