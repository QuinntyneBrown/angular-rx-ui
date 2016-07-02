"use strict";
var error_config_service_1 = require("./error-config.service");
var ErrorConfigProvider = (function () {
    function ErrorConfigProvider() {
        var _this = this;
        this.$get = function () { return new error_config_service_1.ErrorConfig(_this.hrefText, _this.href, _this.message); };
    }
    return ErrorConfigProvider;
}());
exports.ErrorConfigProvider = ErrorConfigProvider;
//# sourceMappingURL=error-config.provider.js.map