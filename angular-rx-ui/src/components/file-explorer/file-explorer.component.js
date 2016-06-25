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
var FileExplorerComponent = (function () {
    function FileExplorerComponent() {
    }
    FileExplorerComponent = __decorate([
        core_1.Component({
            template: require("./file-explorer.component.html"),
            styles: [require("./file-explorer.component.scss")],
            selector: "file-explorer",
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }), 
        __metadata('design:paramtypes', [])
    ], FileExplorerComponent);
    return FileExplorerComponent;
}());
exports.FileExplorerComponent = FileExplorerComponent;
//# sourceMappingURL=file-explorer.component.js.map