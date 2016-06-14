
export * from "./store";
export * from "./action-decorator";
export * from "./pluck-out";
export * from "./invoke-async";
export * from "./change-detection-strategy";
export * from "./component-decorators";
export * from "./service-decorator";
export * from "./add-or-update";
export * from "./action-creator";

export * from "./view-encapsulation";
export * from "./fetch";
export * from "./provide";
export * from "./provide-action";
export * from "./get-x";
export * from "./is-between";
export * from "./translate-x";

export const Observable = Rx.Observable;

angular.extend(window, Rx); 

import { Store } from "./store";
import { Action } from "./action-decorator";
import { pluckOut } from "./pluck-out";
import { ChangeDetectionStrategy } from "./change-detection-strategy";
import { CanActivate, Component, IComponentConfigurationOptions } from "./component-decorators";
import { Service, IServiceConfigurationOptions } from "./service-decorator";
import { addOrUpdate } from "./add-or-update";
import { BaseActionCreator } from "./action-creator";
import { ViewEncapsulation } from "./view-encapsulation";
import { Fetch, IFetchOptions } from "./fetch";
import { provide } from "./provide";
import { provideAction } from "./provide-action";
import { getX } from "./get-x";
import { isBetween } from "./is-between";
import { translateX } from "./translate-x";

import * as core from "./index";

(window as any).core = {
    Store,
    Action,
    pluckOut,
    ChangeDetectionStrategy,
    CanActivate,
    Component,
    Service,
    addOrUpdate,
    BaseActionCreator,
    ViewEncapsulation,
    Fetch,
    provide,
    provideAction,
    getX,
    isBetween,
    translateX
};

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