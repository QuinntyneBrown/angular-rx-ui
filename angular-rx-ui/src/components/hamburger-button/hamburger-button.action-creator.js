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
var modal_action_creator_1 = require("../modal/modal.action-creator");
var hamburger_button_actions_1 = require("./hamburger-button.actions");
var HamburgerButtonActionCreator = (function () {
    function HamburgerButtonActionCreator(dispatcher, guid, invokeAsync, modalActionCreator) {
        var _this = this;
        this.dispatcher = dispatcher;
        this.guid = guid;
        this.invokeAsync = invokeAsync;
        this.modalActionCreator = modalActionCreator;
        this.click = function () { return _this.dispatcher.dispatch(new hamburger_button_actions_1.ClickAction()); };
    }
    HamburgerButtonActionCreator = __decorate([
        core_1.Service({
            serviceName: "hamburgerButtonActionCreator",
            viewProviders: ["dispatcher", "guid", "invokeAsync", "modalActionCreator"]
        }), 
        __metadata('design:paramtypes', [Object, Object, Object, modal_action_creator_1.ModalActionCreator])
    ], HamburgerButtonActionCreator);
    return HamburgerButtonActionCreator;
}());
exports.HamburgerButtonActionCreator = HamburgerButtonActionCreator;
//# sourceMappingURL=hamburger-button.action-creator.js.map