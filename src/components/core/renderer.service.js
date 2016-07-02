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
var provide_1 = require("./provide");
var service_decorator_1 = require("./service.decorator");
(function (scopeType) {
    scopeType[scopeType["isolated"] = 0] = "isolated";
    scopeType[scopeType["global"] = 1] = "global";
})(exports.scopeType || (exports.scopeType = {}));
var scopeType = exports.scopeType;
(function (renderOutputType) {
    renderOutputType[renderOutputType["Html"] = 0] = "Html";
    renderOutputType[renderOutputType["AugmentedJquery"] = 1] = "AugmentedJquery";
    renderOutputType[renderOutputType["NativeElement"] = 2] = "NativeElement";
})(exports.renderOutputType || (exports.renderOutputType = {}));
var renderOutputType = exports.renderOutputType;
var Renderer = (function () {
    function Renderer($compile, $rootScope, getHtml) {
        var _this = this;
        this.$compile = $compile;
        this.$rootScope = $rootScope;
        this.getHtml = getHtml;
        this.options = {
            html: "",
            outputType: renderOutputType.AugmentedJquery,
            parentScope: this.$rootScope,
            isScopeIsolated: true,
            style: {}
        };
        this.render = function (options) {
            angular.extend(_this.options, options);
            var augmentedJquery = _this.$compile(options.html)(_this.options.parentScope.$new(_this.options.isScopeIsolated));
            angular.extend(augmentedJquery[0].style, _this.options.style);
            if (_this.options.outputType === renderOutputType.NativeElement)
                return augmentedJquery[0];
            if (_this.options.outputType === renderOutputType.Html)
                return _this.getHtml(augmentedJquery[0], false);
            return augmentedJquery;
        };
    }
    Renderer = __decorate([
        service_decorator_1.Service({
            serviceName: "renderer",
            viewProviders: ["$compile", "$rootScope", "getHtml"]
        }), 
        __metadata('design:paramtypes', [Function, Object, Object])
    ], Renderer);
    return Renderer;
}());
exports.Renderer = Renderer;
var app = angular.module("renderer", ["getHtml"]);
provide_1.provide(app, Renderer);
//# sourceMappingURL=renderer.service.js.map