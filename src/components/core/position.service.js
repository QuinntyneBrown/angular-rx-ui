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
var Position = (function () {
    function Position(ruler, space, translateXY) {
        var _this = this;
        this.ruler = ruler;
        this.space = space;
        this.translateXY = translateXY;
        this.somewhere = function (a, b, space, directionPriorityList) {
            return _this.ruler.measure({ elements: [a, b] })
                .then(function (resultsArray) {
                var aRectangle = resultsArray[0];
                var bRectangle = resultsArray[1];
                var widthNeeded = bRectangle.width + space;
                var heightNeeded = bRectangle.height + space;
                var resolved = false;
                for (var i = 0; i < directionPriorityList.length; i++) {
                    switch (directionPriorityList[i]) {
                        case "top":
                            if (aRectangle.top > heightNeeded && !resolved) {
                                _this.translate(b, aRectangle, bRectangle, space, "above");
                                resolved = true;
                            }
                            break;
                        case "bottom":
                            if (window.innerHeight - aRectangle.bottom > heightNeeded && !resolved) {
                                _this.translate(b, aRectangle, bRectangle, space, "below");
                                resolved = true;
                            }
                            break;
                        case "left":
                            if (aRectangle.left > widthNeeded && !resolved) {
                                _this.translate(b, aRectangle, bRectangle, space, "left");
                                resolved = true;
                            }
                            break;
                        case "right":
                            if (window.innerWidth - aRectangle.bottom > widthNeeded && !resolved) {
                                _this.translate(b, aRectangle, bRectangle, space, "right");
                                resolved = true;
                            }
                            break;
                    }
                }
            });
        };
        this.above = function (a, b, space) {
            return _this.ruler.measure({ elements: [a, b] })
                .then(function (resultsArray) {
                _this.translate(b, resultsArray[0], resultsArray[1], space, "above");
            });
        };
        this.below = function (a, b, space) {
            return _this.ruler.measure({ elements: [a, b] })
                .then(function (resultsArray) {
                _this.translate(b, resultsArray[0], resultsArray[1], space, "below");
            });
        };
        this.left = function (a, b, space) {
            return _this.ruler.measure({ elements: [a, b] })
                .then(function (resultsArray) {
                _this.translate(b, resultsArray[0], resultsArray[1], space, "left");
            });
        };
        this.right = function (a, b, space) {
            return _this.ruler.measure({ elements: [a, b] })
                .then(function (resultsArray) {
                _this.translate(b, resultsArray[0], resultsArray[1], space, "right");
            });
        };
        this.translate = function (htmlElement, aRectangle, bRectangle, space, side) {
            if (side === "above")
                _this.translateXY(htmlElement, aRectangle.centerX - bRectangle.radiusX, aRectangle.top - space - bRectangle.height);
            if (side === "below")
                _this.translateXY(htmlElement, aRectangle.centerX - bRectangle.radiusX, aRectangle.bottom + space);
            if (side === "left")
                _this.translateXY(htmlElement, aRectangle.left - space - bRectangle.width, aRectangle.centerY - bRectangle.radiusY);
            if (side === "right")
                _this.translateXY(htmlElement, aRectangle.right + space, aRectangle.centerY - bRectangle.radiusY);
        };
    }
    Position = __decorate([
        core_1.Injectable(),
        core_1.Service({
            serviceName: "position",
            viewProviders: ["ruler", "space", "translateXY"]
        }), 
        __metadata('design:paramtypes', [Object, Object, Function])
    ], Position);
    return Position;
}());
exports.Position = Position;
var app = angular.module("position", [
    "ruler",
    "space",
    "translateXY"
]);
core_1.provide(app, Position);
//# sourceMappingURL=position.service.js.map