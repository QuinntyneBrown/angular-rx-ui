"use strict";
var core = require("./index");
window.core = core;
require("./local-storage-manager-provider");
require("./store");
require("./add-or-update");
require("./fetch");
require("./get-x");
require("./invoke-async");
require("./component-extension");
require("./safe-digest");
require("./translate-x");
var coreApp = angular.module("app.core", [
    "ngSanitize",
    "localStorageManager",
    "store",
    "addOrUpdate",
    "getX",
    "invokeAsync",
    "fetch",
    "safeDigest",
    "translateX"
]);
//# sourceMappingURL=core.module.js.map