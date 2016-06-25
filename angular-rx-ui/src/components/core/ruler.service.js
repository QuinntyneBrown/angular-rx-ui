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
var Ruler = (function () {
    function Ruler($document, $q, $timeout, rectangle) {
        var _this = this;
        this.$document = $document;
        this.$q = $q;
        this.$timeout = $timeout;
        this.rectangle = rectangle;
        this.measure = function (element) {
            var deferred = _this.$q.defer();
            var documentRef = angular.element(_this.$document)[0];
            if (documentRef.body.contains(element)) {
                deferred.resolve(_this.rectangle.createInstance({ clientRect: element.getBoundingClientRect() }));
            }
            else {
                _this.$timeout(function () {
                    documentRef.body.appendChild(element);
                    var clientRect = element.getBoundingClientRect();
                    element.parentNode.removeChild(element);
                    deferred.resolve(_this.rectangle.createInstance({ clientRect: clientRect }));
                }, 0, false);
            }
            return deferred.promise;
        };
    }
    Ruler = __decorate([
        core_1.Service({
            serviceName: "ruler",
            viewProviders: ["$document", "$q", "$timeout", "rectangle"]
        }), 
        __metadata('design:paramtypes', [Object, Object, Function, Object])
    ], Ruler);
    return Ruler;
}());
exports.Ruler = Ruler;
var app = angular.module("ruler", [
    "rectangle",
]);
core_1.provide(app, Ruler);
//# sourceMappingURL=ruler.service.js.map