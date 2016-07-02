"use strict";
require("../core");
var tab_content_component_1 = require("./tab-content.component");
var tab_title_component_1 = require("./tab-title.component");
var tabs_component_1 = require("./tabs.component");
var tabs_action_creator_1 = require("./tabs.action-creator");
var reducers = require("./tabs.reducers");
var core_1 = require("../core");
var app = angular.module("app.tabs", [
    "app.core"
]);
core_1.provide(app, tabs_action_creator_1.TabsActionCreator);
app.service("tabsActionCreator", ["$location", "dispatcher", "tabsService", "guid", tabs_action_creator_1.TabsActionCreator]);
app.component(tab_content_component_1.TabContentComponent);
app.component(tab_title_component_1.TabTitleComponent);
app.component(tabs_component_1.TabsComponent);
app.config(["reducersProvider", function (reducersProvider) {
        reducersProvider.configure(reducers.setCurrentTabReducer);
        reducersProvider.configure(reducers.tabChildLoadedReducer);
    }]);
app.config(["initialStateProvider", "localStorageManagerProvider", function (initialStateProvider, localStorageManagerProvider) {
        var localStorageInitialState = localStorageManagerProvider.get({ name: "initialState" });
        if (!localStorageInitialState)
            localStorageManagerProvider.put({
                name: "initialState", value: {
                    tabIndex: {}
                }
            });
        var initialState = localStorageManagerProvider.get({ name: "initialState" });
        initialState.tabIndex = initialState.tabIndex || {};
        initialStateProvider.configure(initialState);
    }]);
//# sourceMappingURL=index.js.map