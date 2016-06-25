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
    function Position($q, ruler, space, translateXY) {
        var _this = this;
        this.$q = $q;
        this.ruler = ruler;
        this.space = space;
        this.translateXY = translateXY;
        this.somewhere = function (a, b, space, directionPriorityList) {
            var deferred = _this.$q.defer();
            return deferred.promise;
        };
        this.above = function (a, b, space) {
            var deferred = _this.$q.defer();
            _this.$q
                .all([_this.ruler.measure(a), _this.ruler.measure(b)])
                .then(function (resultsArray) {
                var aRectangle = resultsArray[0];
                var bRectangle = resultsArray[1];
                _this.translateXY(b, aRectangle.centerX - bRectangle.radiusX, aRectangle.bottom + space);
                deferred.resolve();
            });
            return deferred.promise;
        };
        this.below = function (a, b, space) {
            var deferred = _this.$q.defer();
            _this.$q
                .all([_this.ruler.measure(a), _this.ruler.measure(b)])
                .then(function (resultsArray) {
                var aRectangle = resultsArray[0];
                var bRectangle = resultsArray[1];
                _this.translateXY(b, aRectangle.centerX - bRectangle.radiusX, aRectangle.bottom + space);
                deferred.resolve();
            });
            return deferred.promise;
        };
        this.left = function (a, b, space) {
            var deferred = _this.$q.defer();
            _this.$q
                .all([_this.ruler.measure(a), _this.ruler.measure(b)])
                .then(function (resultsArray) {
                var aRectangle = resultsArray[0];
                var bRectangle = resultsArray[1];
                _this.translateXY(b, aRectangle.centerX - bRectangle.radiusX, aRectangle.bottom + space);
                deferred.resolve();
            });
            return deferred.promise;
        };
        this.right = function (a, b, space) {
            var deferred = _this.$q.defer();
            _this.$q
                .all([_this.ruler.measure(a), _this.ruler.measure(b)])
                .then(function (resultsArray) {
                var aRectangle = resultsArray[0];
                var bRectangle = resultsArray[1];
                _this.translateXY(b, aRectangle.centerX - bRectangle.radiusX, aRectangle.bottom + space);
                deferred.resolve();
            });
            return deferred.promise;
        };
    }
    Position = __decorate([
        core_1.Injectable(),
        core_1.Service({
            serviceName: "position",
            viewProviders: ["$q", "ruler", "space", "translateXY"]
        }), 
        __metadata('design:paramtypes', [Function, Object, Object, Function])
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