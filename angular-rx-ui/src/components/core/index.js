"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(require("./service"));
__export(require("./injectable"));
__export(require("./store"));
__export(require("./action-decorator"));
__export(require("./pluck-out"));
__export(require("./change-detection-strategy"));
__export(require("./component-decorators"));
__export(require("./service-decorator"));
__export(require("./add-or-update"));
__export(require("./action-creator"));
__export(require("./view-encapsulation"));
__export(require("./fetch"));
__export(require("./provide"));
__export(require("./provide-action"));
__export(require("./get-x"));
__export(require("./is-between"));
__export(require("./translate-x"));
exports.Observable = Rx.Observable;
angular.extend(window, Rx);
var store_2 = require("./store");
var service_2 = require("./service");
var action_decorator_2 = require("./action-decorator");
var pluck_out_2 = require("./pluck-out");
var change_detection_strategy_2 = require("./change-detection-strategy");
var component_decorators_2 = require("./component-decorators");
var service_decorator_2 = require("./service-decorator");
var add_or_update_2 = require("./add-or-update");
var action_creator_2 = require("./action-creator");
var view_encapsulation_2 = require("./view-encapsulation");
var fetch_2 = require("./fetch");
var provide_2 = require("./provide");
var provide_action_2 = require("./provide-action");
var get_x_2 = require("./get-x");
var is_between_2 = require("./is-between");
var translate_x_2 = require("./translate-x");
var core = require("./index");
window.core = {
    BaseService: service_2.BaseService,
    Store: store_2.Store,
    Action: action_decorator_2.Action,
    pluckOut: pluck_out_2.pluckOut,
    ChangeDetectionStrategy: change_detection_strategy_2.ChangeDetectionStrategy,
    CanActivate: component_decorators_2.CanActivate,
    Component: component_decorators_2.Component,
    Service: service_decorator_2.Service,
    addOrUpdate: add_or_update_2.addOrUpdate,
    BaseActionCreator: action_creator_2.BaseActionCreator,
    ViewEncapsulation: view_encapsulation_2.ViewEncapsulation,
    Fetch: fetch_2.Fetch,
    provide: provide_2.provide,
    provideAction: provide_action_2.provideAction,
    getX: get_x_2.getX,
    isBetween: is_between_2.isBetween,
    translateX: translate_x_2.translateX
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
var coreApp = angular.module("app.core", [
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
]);
angular.extend(window, core);
//# sourceMappingURL=index.js.map