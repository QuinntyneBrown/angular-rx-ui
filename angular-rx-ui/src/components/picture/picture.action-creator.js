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
var picture_actions_1 = require("./picture.actions");
var PictureActionCreator = (function () {
    function PictureActionCreator(dispatcher, guid, invokeAsync, modalActionCreator, pictureService) {
        var _this = this;
        this.dispatcher = dispatcher;
        this.guid = guid;
        this.invokeAsync = invokeAsync;
        this.modalActionCreator = modalActionCreator;
        this.pictureService = pictureService;
        this.upload = function (dragEvent) {
            dragEvent.stopPropagation();
            dragEvent.preventDefault();
            var newId = _this.guid();
            if (dragEvent.dataTransfer && dragEvent.dataTransfer.files) {
                var packageFiles = function (fileList) {
                    var formData = new FormData();
                    for (var i = 0; i < fileList.length; i++) {
                        formData.append(fileList[i].name, fileList[i]);
                    }
                    return formData;
                };
                _this.pictureService
                    .tryToUpload({ data: packageFiles(dragEvent.dataTransfer.files) })
                    .then(function (response) { return _this.dispatcher.dispatch(new picture_actions_1.PictureUploadAction(newId, response.files)); });
            }
            return newId;
        };
    }
    PictureActionCreator = __decorate([
        core_1.Service({
            serviceName: "pictureActionCreator",
            viewProviders: ["dispatcher", "guid", "invokeAsync", "modalActionCreator", "pictureService"]
        }), 
        __metadata('design:paramtypes', [Object, Object, Object, modal_action_creator_1.ModalActionCreator, Object])
    ], PictureActionCreator);
    return PictureActionCreator;
}());
exports.PictureActionCreator = PictureActionCreator;
//# sourceMappingURL=picture.action-creator.js.map