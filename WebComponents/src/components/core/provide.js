"use strict";
exports.provide = function (app, service) { return app.service(service.serviceName, service.$inject.concat([service])); };
//# sourceMappingURL=provide.js.map