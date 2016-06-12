import * as core from "./index";

(window as any).core = core;

require("./local-storage-manager-provider");
require("./store");
require("./add-or-update");
require("./append-to-body-async");
require("./debounce");
require("./extend-css-async");
require("./get-from-url-sync");
require("./fetch");
require("./get-x");
require("./invoke-async");
require("./component-extension");
require("./remove-element");
require("./safe-digest");
require("./set-opacity-async");
require("./translate-x");
require("./translate-x-async");

let coreApp = (<any>angular.module("app.core", [
    "ngSanitize",
    "localStorageManager",
    "store",   
    "addOrUpdate",
    "appendToBodyAsync",
    "debounce",
    "extendCssAsync",
    "getFromUrlSync",
    "getX",
    "invokeAsync",
    "fetch",
    "removeElement",
    "safeDigest",
    "setOpacityAsync",
    "translateX",
    "translateXAsync"
]));


angular.extend(window, core);