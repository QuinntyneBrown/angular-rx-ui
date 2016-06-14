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
var modal_actions_1 = require("./modal.actions");
var core_1 = require("../core");
var ModalActionCreator = (function () {
    function ModalActionCreator($rootScope, dispatcher) {
        var _this = this;
        this.$rootScope = $rootScope;
        this.dispatcher = dispatcher;
        this.open = function (options) { return _this.dispatcher.dispatch(new modal_actions_1.OpenModalAction(options.html)); };
        this.close = function () { return _this.dispatcher.dispatch(new modal_actions_1.CloseModalAction()); };
        $rootScope.$on("$routeChangeSuccess", this.close);
    }
    ModalActionCreator = __decorate([
        core_1.Service({
            serviceName: "modalActionCreator",
            viewProviders: ["$rootScope", "dispatcher"]
        }), 
        __metadata('design:paramtypes', [Object, Object])
    ], ModalActionCreator);
    return ModalActionCreator;
}());
exports.ModalActionCreator = ModalActionCreator;
//# sourceMappingURL=modal.action-creator.js.map