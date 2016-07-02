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
var PictureService = (function () {
    function PictureService($q, apiEndpoint, fetch) {
        var _this = this;
        this.$q = $q;
        this.apiEndpoint = apiEndpoint;
        this.fetch = fetch;
        this.tryToUpload = function (options) {
            var deferred = _this.$q.defer();
            var xhr = new XMLHttpRequest();
            xhr.open("POST", _this.baseUri + "/upload", true);
            xhr.onload = function (e) {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        deferred.resolve(JSON.parse(xhr.response));
                    }
                    else {
                        deferred.resolve(xhr.statusText);
                    }
                }
            };
            xhr.send(options.data);
            return deferred.promise;
        };
    }
    Object.defineProperty(PictureService.prototype, "baseUri", {
        get: function () { return this.apiEndpoint.getBaseUrl() + "/picture"; },
        enumerable: true,
        configurable: true
    });
    PictureService = __decorate([
        core_1.Injectable(),
        core_1.Service({
            serviceName: "pictureService",
            viewProviders: ["$q", "apiEndpoint", "fetch"]
        }), 
        __metadata('design:paramtypes', [Function, Object, Object])
    ], PictureService);
    return PictureService;
}());
exports.PictureService = PictureService;
//# sourceMappingURL=picture.service.js.map