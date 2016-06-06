"use strict";
var ApiEndpointProvider = (function () {
    function ApiEndpointProvider() {
        var _this = this;
        this.config = {
            getBaseUrl: function (name) {
                var baseUrl = "";
                if (name) {
                    _this.config.baseUrls.forEach(function (endpointDefinition) {
                        if (name === endpointDefinition.name) {
                            baseUrl = endpointDefinition.url;
                        }
                    });
                }
                if (!name || baseUrl === "") {
                    _this.config.baseUrls.forEach(function (endpointDefinition) {
                        if (!endpointDefinition.name && baseUrl === "") {
                            baseUrl = endpointDefinition.url;
                        }
                    });
                }
                return baseUrl;
            },
            baseUrls: [],
            configure: function (baseUrl, name) {
                var self = this;
                self.baseUrls.push({ url: baseUrl, name: name });
            }
        };
    }
    ApiEndpointProvider.prototype.configure = function (baseUrl, name) {
        this.config.baseUrls.push({ url: baseUrl, name: name });
    };
    ApiEndpointProvider.prototype.$get = function () {
        return this.config;
    };
    return ApiEndpointProvider;
}());
exports.ApiEndpointProvider = ApiEndpointProvider;
angular.module("apiEndpoint", []).provider("apiEndpoint", ApiEndpointProvider);
//# sourceMappingURL=api-endpoint-provider.js.map