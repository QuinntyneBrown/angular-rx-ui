//https://github.com/valor-software/ng2-file-upload/
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
var picture_action_creator_1 = require("./picture.action-creator");
var PictureUploadComponent = (function () {
    function PictureUploadComponent($element, pictureActionCreator) {
        var _this = this;
        this.$element = $element;
        this.pictureActionCreator = pictureActionCreator;
        this.ngOnInit = function () {
            _this.drop.addEventListener("dragover", function (dragEvent) {
                dragEvent.stopPropagation();
                dragEvent.preventDefault();
            }, false);
            _this.drop.addEventListener("drop", _this.pictureActionCreator.upload, false);
        };
        this.ngOnDestroy = function () { return _this.drop.removeEventListener("drop", _this.pictureActionCreator.upload, false); };
    }
    Object.defineProperty(PictureUploadComponent.prototype, "drop", {
        get: function () {
            return this.$element.find(".drop-zone")[0];
        },
        enumerable: true,
        configurable: true
    });
    PictureUploadComponent = __decorate([
        core_1.Component({
            template: require("./picture-upload.component.html"),
            styles: require("./picture-upload.component.scss"),
            selector: "picture-upload",
            viewProviders: ["$element", "pictureActionCreator"],
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }), 
        __metadata('design:paramtypes', [Object, picture_action_creator_1.PictureActionCreator])
    ], PictureUploadComponent);
    return PictureUploadComponent;
}());
exports.PictureUploadComponent = PictureUploadComponent;
//# sourceMappingURL=picture-upload.component.js.map