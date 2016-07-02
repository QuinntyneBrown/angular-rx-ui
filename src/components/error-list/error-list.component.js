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
var error_config_service_1 = require('./error-config.service');
var ErrorListComponent = (function () {
    function ErrorListComponent(errorConfig) {
        this.errorConfig = errorConfig;
        this.errorList = [];
        this.storeOnChange = function (state) {
        };
    }
    ErrorListComponent.prototype.getGenericError = function () {
        return {
            message: this.errorConfig.message,
            href: this.errorConfig.href,
            hrefText: this.errorConfig.hrefText,
            dateTime: new Date().toISOString()
        };
    };
    ErrorListComponent.prototype.dismissError = function (index) {
        this.errorList.splice(index, 1);
    };
    ErrorListComponent = __decorate([
        core_1.Component({
            template: require("./error-list.component.html"),
            styles: [require("./error-list.component.scss")],
            selector: "error-list",
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            viewProviders: ["errorConfig"]
        }), 
        __metadata('design:paramtypes', [error_config_service_1.ErrorConfig])
    ], ErrorListComponent);
    return ErrorListComponent;
}());
exports.ErrorListComponent = ErrorListComponent;
//# sourceMappingURL=error-list.component.js.map