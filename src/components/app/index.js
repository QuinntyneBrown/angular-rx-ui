"use strict";
require("../core");
var core_1 = require("../core");
var app_service_1 = require("./app.service");
var app = angular.module("app.app", [
    "app.core"
]);
core_1.provide(app, app_service_1.AppService);
//# sourceMappingURL=index.js.map