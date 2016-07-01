
export * from "./service";
export * from "./injectable";
export * from "./inject";
export * from "./store";
export * from "./action-decorator";
export * from "./pluck-out";
export * from "./invoke-async";
export * from "./change-detection-strategy";
export * from "./component.decorators";
export * from "./convert-unix-timestamp-to-date";
export * from "./service.decorator";
export * from "./cache.decorator";
export * from "./add-or-update";
export * from "./action-creator";
export * from "./pluck";
export * from "./view-encapsulation";
export * from "./fetch";
export * from "./login-redirect-provider";
export * from "./provide";
export * from "./provide-action";
export * from "./provide-route-promise";
export * from "./get-x";
export * from "./is-between";
export * from "./translate-x";
export * from "./translate-x-y";
export * from "./get-html";
export * from "./point.d";
export * from "./position.d";
export * from "./renderer.service";
export * from "./rectangle-instance-options.d";
export * from "./ruler.d";
export * from "./set-element-dimension";
export * from "./set-element-dimensions";
export * from "./space.d";
export * from "./translate-x-y.d";
export * from "./rectangle.d";
export * from "./template.d";
export * from "./template-get-options.d";

export const Observable = Rx.Observable;

import { Store } from "./store";
import { BaseService } from "./service";
import { Action } from "./action-decorator";
import { pluckOut } from "./pluck-out";
import { ChangeDetectionStrategy } from "./change-detection-strategy";
import { CanActivate, Component, IComponentConfigurationOptions } from "./component.decorators";
import { Service, IServiceConfigurationOptions } from "./service.decorator";
import { addOrUpdate } from "./add-or-update";
import { BaseActionCreator } from "./action-creator";
import { ViewEncapsulation } from "./view-encapsulation";
import { Fetch, IFetchOptions } from "./fetch";
import { provide } from "./provide";
import { provideAction } from "./provide-action";
import { getX } from "./get-x";
import { isBetween } from "./is-between";
import { translateX } from "./translate-x";
import { translateXY } from "./translate-x-y";
import { Position } from "./position.service";
import { Renderer } from "./renderer.service";
import { Rectangle } from "./rectangle.service";
import { Ruler } from "./ruler.service";
import { Space } from "./space.service";
import { Template } from "./template.service";

require("./api-endpoint-provider");
require("./local-storage-manager-provider");
require("./login-redirect-provider");
require("./store");
require("./add-or-update");
require("./append-to-body-async");
require("./auth-interceptor");
require("./convert-unix-timestamp-to-date");
require("./debounce");
require("./extend-css-async");
require("./get-from-url-sync");
require("./get-html");
require("./fetch");
require("./get-x");
require("./invoke-async");
require("./component-extension");
require("./position.service");
require("./remove-element");
require("./route-resolver");
require("./route-when-extension");
require("./rectangle.service");
require("./renderer.service");
require("./ruler.service");
require("./safe-digest");
require("./set-element-dimension");
require("./set-element-dimensions");
require("./set-opacity-async");
require("./space.service");
require("./translate-x");
require("./translate-x-y");
require("./translate-x-async");
require("./template.service");
require("./form-encode");

let coreApp = (<any>angular.module("app.core", [
    "ngSanitize",
    "apiEndpoint",
    "authInterceptor",
    "localStorageManager",
    "store",
    "addOrUpdate",
    "appendToBodyAsync",
    "convertUnixTimestampToDate",
    "debounce",
    "extendCssAsync",
    "getFromUrlSync",
    "getHtml",
    "getX",
    "invokeAsync",
    "fetch",
    "formEncode",
    "loginRedirect",
    "position",
    "removeElement",
    "routeResolver",
    "routeWhenExtension",
    "rectangle",
    "renderer",
    "ruler",
    "safeDigest",
    "setElementDimension",
    "setElementDimensions",
    "setOpacityAsync",
    "space",
    "rectangle",
    "translateX",
    "translateXY",
    "translateXAsync",
    "template"
]));

