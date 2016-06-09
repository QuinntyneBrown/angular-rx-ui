"use strict";
require("../core/core.module");
var core_1 = require("../core");
var backdrop_service_1 = require("./backdrop.service");
var app = angular.module("app.backdrop", [
    "app.core"
]);
core_1.provide(app, backdrop_service_1.Backdrop);
app.run(["backdrop", function (backdrop) { }]);
//# sourceMappingURL=backdrop.module.js.map