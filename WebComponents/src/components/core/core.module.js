"use strict";
var core = require("./index");
window.core = core;
require("./local-storage-manager-provider");
require("./store");
require("./add-or-update");
require("./fetch");
require("./invoke-async");
require("./component-extension");
require("./safe-digest");
var coreApp = angular.module("app.core", [
    "ngSanitize",
    "localStorageManager",
    "store",
    "addOrUpdate",
    "invokeAsync",
    "fetch",
    "safeDigest"
]);
//# sourceMappingURL=core.module.js.map