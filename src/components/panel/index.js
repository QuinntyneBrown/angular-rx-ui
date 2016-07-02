"use strict";
require("../core");
var core_1 = require("../core");
var panel_component_1 = require("./panel.component");
var panel_action_creator_1 = require("./panel.action-creator");
var reducers = require("./panel.reducers");
var actions = require("./panel.actions");
var app = angular.module("app.panel", [
    "app.core"
]);
core_1.provide(app, panel_action_creator_1.PanelActionCreator);
app.component(panel_component_1.PanelComponent);
app.config(["reducersProvider", function (reducersProvider) {
        for (var reducer in reducers) {
            reducersProvider.configure(reducers[reducer]);
        }
    }]);
for (var action in actions) {
    core_1.provideAction(app, actions[action]);
}
//# sourceMappingURL=index.js.map