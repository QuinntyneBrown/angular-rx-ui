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
var Backdrop = (function () {
    function Backdrop($q, appendToBodyAsync, extendCssAsync, removeElement, setOpacityAsync) {
        var _this = this;
        this.$q = $q;
        this.appendToBodyAsync = appendToBodyAsync;
        this.extendCssAsync = extendCssAsync;
        this.removeElement = removeElement;
        this.setOpacityAsync = setOpacityAsync;
        this.createInstance = function (options) {
            var instance = new Backdrop(_this.$q, _this.appendToBodyAsync, _this.extendCssAsync, _this.removeElement, _this.setOpacityAsync);
            return instance;
        };
        this.openAsync = function () {
            var deferred = _this.$q.defer();
            _this.initializeAsync()
                .then(_this.appendBackDropToBodyAsync)
                .then(_this.showAsync)
                .then(function () {
                _this.isOpen = true;
                deferred.resolve();
            });
            return deferred.promise;
        };
        this.closeAsync = function () {
            var deferred = _this.$q.defer();
            _this.hideAsync().then(function (results) {
                _this.dispose();
                _this.isOpen = false;
                deferred.resolve();
            });
            return deferred.promise;
        };
        this.initializeAsync = function () {
            var deferred = _this.$q.defer();
            _this.augmentedJQuery = angular.element("<div></div>");
            _this.extendCssAsync({
                nativeHTMLElement: _this.nativeHTMLElement,
                cssObject: {
                    "-webkit-transition": "opacity 300ms ease-in-out",
                    "-o-transition": "opacity 300ms ease-in-out",
                    "transition": "opacity 300ms ease-in-out",
                    "opacity": "0",
                    "position": "fixed",
                    "top": "0",
                    "left": "0",
                    "height": "100%",
                    "width": "100%",
                    "background-color": "rgba(0, 0, 0, .25)",
                    "display": "block"
                }
            }).then(function () {
                deferred.resolve();
            });
            return deferred.promise;
        };
        this.showAsync = function () {
            return _this.setOpacityAsync({ nativeHtmlElement: _this.nativeHTMLElement, opacity: 25 });
        };
        this.appendBackDropToBodyAsync = function () {
            return _this.appendToBodyAsync({ nativeElement: _this.nativeHTMLElement });
        };
        this.hideAsync = function () {
            return _this.setOpacityAsync({ nativeHtmlElement: _this.nativeHTMLElement, opacity: 0 });
        };
        this.dispose = function () {
            _this.removeElement({ nativeHTMLElement: _this.nativeHTMLElement });
            _this.augmentedJQuery = null;
        };
        this.isOpen = false;
        this.isAnimating = false;
    }
    Object.defineProperty(Backdrop.prototype, "nativeHTMLElement", {
        get: function () { return this.augmentedJQuery[0]; },
        enumerable: true,
        configurable: true
    });
    Backdrop = __decorate([
        core_1.Service({
            serviceName: "backdrop",
            viewProviders: ["$q", "appendToBodyAsync", "extendCssAsync", "removeElement", "setOpacityAsync"]
        }), 
        __metadata('design:paramtypes', [Object, Object, Object, Object, Object])
    ], Backdrop);
    return Backdrop;
}());
exports.Backdrop = Backdrop;
//# sourceMappingURL=backdrop.service.js.map