
require("./local-storage-manager-provider");
require("./store");

require("./add-or-update");
require("./append-to-body-async");
require("./component-extension");
require("./extend-css-async");
require("./fetch");
require("./invoke-async");
require("./remove-element");
require("./safe-digest");
require("./set-opacity-async");

let coreApp = (<any>angular.module("app.core", [
    "ngSanitize",
    "localStorageManager",
    "store",   

    "addOrUpdate",
    "appendToBodyAsync",
    "extendCssAsync",
    "invokeAsync",
    "fetch",
    "removeElement",
    "setOpacityAsync",
    "safeDigest"
]));
