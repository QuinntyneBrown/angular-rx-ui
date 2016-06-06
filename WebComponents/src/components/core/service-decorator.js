"use strict";
function Service(config) {
    if (config === void 0) { config = {}; }
    return function (cls) {
        cls.serviceName = config.serviceName;
        cls.$inject = config.viewProviders;
    };
}
exports.Service = Service;
//# sourceMappingURL=service-decorator.js.map