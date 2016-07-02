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
var FileExplorerActionCreator = (function () {
    function FileExplorerActionCreator(dispatcher, guid, invokeAsync, modalActionCreator) {
        this.dispatcher = dispatcher;
        this.guid = guid;
        this.invokeAsync = invokeAsync;
        this.modalActionCreator = modalActionCreator;
    }
    FileExplorerActionCreator = __decorate([
        core_1.Service({
            serviceName: "fileExplorerActionCreator",
            viewProviders: ["dispatcher", "guid", "invokeAsync", "modalActionCreator"]
        }), 
        __metadata('design:paramtypes', [Object, Object, Object, modal_action_creator_1.ModalActionCreator])
    ], FileExplorerActionCreator);
    return FileExplorerActionCreator;
}());
exports.FileExplorerActionCreator = FileExplorerActionCreator;
//# sourceMappingURL=file-explorer.action-creator.js.map