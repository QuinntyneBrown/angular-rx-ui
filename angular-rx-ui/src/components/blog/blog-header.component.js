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
var BlogHeaderComponent = (function () {
    function BlogHeaderComponent() {
    }
    BlogHeaderComponent = __decorate([
        core_1.Component({
            template: require("./blog-header.component.html"),
            styles: [require("./blog-header.component.scss")],
            selector: "blog-header",
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            inputs: [
                "articleTitle",
                "articleHref",
                "articlePublishedDate"
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], BlogHeaderComponent);
    return BlogHeaderComponent;
}());
exports.BlogHeaderComponent = BlogHeaderComponent;
//# sourceMappingURL=blog-header.component.js.map