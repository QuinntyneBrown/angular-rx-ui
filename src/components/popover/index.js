"use strict";
require("../core");
var core_1 = require("../core");
var popover_action_creator_1 = require("./popover.action-creator");
var popover_service_1 = require("./popover.service");
var popover_config_provider_1 = require("./popover-config-provider");
var reducers = require("./popover.reducers");
var app = angular.module("app.popover", [
    "app.core"
]);
core_1.provide(app, popover_action_creator_1.PopoverActionCreator);
core_1.provide(app, popover_service_1.Popover);
app.provider("popoverConfig", popover_config_provider_1.PopoverConfigProvider);
app.config(["reducersProvider", function (reducersProvider) {
        for (var reducer in reducers) {
            reducersProvider.configure(reducers[reducer]);
        }
    }]);
app.config(["initialStateProvider", "localStorageManagerProvider", function (initialStateProvider, localStorageManagerProvider) {
        var localStorageInitialState = localStorageManagerProvider.get({ name: "initialState" });
        if (!localStorageInitialState)
            localStorageManagerProvider.put({
                name: "initialState", value: {
                    popoverInstances: []
                }
            });
        var initialState = localStorageManagerProvider.get({ name: "initialState" });
        initialState.popoverInstances = initialState.popoverInstances || [];
        initialStateProvider.configure(initialState);
    }]);
app.run(["popover", function (popover) { }]);
//# sourceMappingURL=index.js.map