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
var Rectangle = (function () {
    function Rectangle() {
        this.createInstance = function (options) {
            var instance = new Rectangle();
            if (options.clientRect) {
                instance.left = options.clientRect.left;
                instance.top = options.clientRect.top;
                instance.height = options.clientRect.height;
                instance.width = options.clientRect.width;
            }
            else {
                instance.left = options.left;
                instance.top = options.top;
                instance.height = options.height;
                instance.width = options.width;
            }
            return instance;
        };
    }
    Object.defineProperty(Rectangle.prototype, "right", {
        get: function () { return this.left + this.width; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Rectangle.prototype, "bottom", {
        get: function () { return this.top + this.height; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Rectangle.prototype, "centerX", {
        get: function () { return this.left + (this.width / 2); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Rectangle.prototype, "centerY", {
        get: function () { return this.top + (this.height / 2); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Rectangle.prototype, "radiusX", {
        get: function () { return this.width / 2; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Rectangle.prototype, "radiusY", {
        get: function () { return this.height / 2; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Rectangle.prototype, "middle", {
        get: function () { return { x: this.centerX, y: this.centerY }; },
        enumerable: true,
        configurable: true
    });
    Rectangle = __decorate([
        core_1.Service({
            serviceName: "rectangle"
        }), 
        __metadata('design:paramtypes', [])
    ], Rectangle);
    return Rectangle;
}());
exports.Rectangle = Rectangle;
var app = angular.module("rectangle", []);
core_1.provide(app, Rectangle);
//# sourceMappingURL=rectangle.service.js.map