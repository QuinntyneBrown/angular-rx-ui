"use strict";
exports.provide = function (app, service) {
    if (service.$inject) {
        app.service(service.serviceName, service.$inject.concat([service]));
    }
    else {
        app.service(service.serviceName, [service]);
    }
};
//# sourceMappingURL=provide.js.map