require("./core.css");

require("./local-storage-manager-provider");
require("./store");

require("./add-or-update");
require("./api-endpoint-provider");
require("./append-to-body-async");
require("./debounce");
require("./extend-css-async");
require("./fetch");
require("./form-encode");
require("./get-from-url-sync");
require("./get-x");
require("./get-y");
require("./invoke-async");
require("./login-redirect-provider");
require("./safe-digest");
require("./component-extension");
require("./remove-element");
require("./route-resolver");
require("./route-when-extension");
require("./set-opacity-async");
require("./auth-interceptor");
require("./translate-x");
require("./translate-x-async");
require("./transform-y");


let coreApp = (<any>angular.module("app.core", [
    "ngSanitize",
    "addOrUpdate",
    "appendToBodyAsync",
    "apiEndpoint",
    "authInterceptor",
    "debounce",
    "extendCssAsync",
    "fetch",
    "formEncode",
    "getFromUrlSync",
    "getX",
    "getY",
    "invokeAsync",
    "localStorageManager",
    "loginRedirect",
    "removeElement",
    "routeResolver",
    "routeWhenExtension",
    "safeDigest",
    "setOpacityAsync",
    "store",   
    "translateX",
    "translateXAsync",
    "transformY"
]));
