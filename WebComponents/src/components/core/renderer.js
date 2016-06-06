"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ParentRenderer = (function () {
    function ParentRenderer() {
    }
    return ParentRenderer;
}());
var Renderer = (function (_super) {
    __extends(Renderer, _super);
    function Renderer() {
        _super.apply(this, arguments);
    }
    Renderer.prototype.setElementStyle = function (element, propertyName, propertyValue) {
        element.style[propertyName] = propertyValue;
    };
    return Renderer;
}(ParentRenderer));
var JQueryRenderer = (function (_super) {
    __extends(JQueryRenderer, _super);
    function JQueryRenderer() {
        _super.apply(this, arguments);
    }
    JQueryRenderer.prototype.setElementStyle = function (element, propertyName, propertyValue) {
        $(element).css(propertyName, propertyValue);
    };
    return JQueryRenderer;
}(ParentRenderer));
angular.module("renderer", []).service("renderer", $ ? JQueryRenderer : Renderer);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = $ ? JQueryRenderer : Renderer;
//# sourceMappingURL=renderer.js.map