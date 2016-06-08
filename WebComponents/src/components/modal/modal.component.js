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
var modal_action_creator_1 = require("./modal.action-creator");
var ModalComponent = (function () {
    function ModalComponent($attrs, $element, modalActionCreator) {
        var _this = this;
        this.$attrs = $attrs;
        this.$element = $element;
        this.modalActionCreator = modalActionCreator;
        this.close = function () { return _this.modalActionCreator.close(); };
    }
    ModalComponent = __decorate([
        core_1.Component({
            template: require("./modal.component.html"),
            styles: [require("./modal.component.css")],
            selector: "modal",
            transclude: {
                'title': '?modalTitle',
                'content': '?modalContent'
            },
            viewProviders: [
                '$attrs',
                '$element',
                'modalActionCreator'
            ]
        }), 
        __metadata('design:paramtypes', [Object, Object, modal_action_creator_1.ModalActionCreator])
    ], ModalComponent);
    return ModalComponent;
}());
exports.ModalComponent = ModalComponent;
//# sourceMappingURL=modal.component.js.map