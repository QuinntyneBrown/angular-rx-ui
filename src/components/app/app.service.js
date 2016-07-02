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
var AppService = (function () {
    function AppService(store) {
        var _this = this;
        this.store = store;
        this.storeOnChange = function (state) {
        };
        this.properties = [];
        this.uis = [];
        this.getProperty = function (name) {
            var result;
            for (var i = 0; i < _this.properties.length; i++) {
                if (_this.properties[i].name === name)
                    result = _this.properties[i].value;
            }
            return result;
        };
        store.subscribe(this.storeOnChange);
    }
    AppService = __decorate([
        core_1.Service({
            serviceName: "appService",
            viewProviders: ["store"]
        }), 
        __metadata('design:paramtypes', [core_1.Store])
    ], AppService);
    return AppService;
}());
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map