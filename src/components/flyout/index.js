"use strict";
require("../core");
var core_1 = require("../core");
var flyout_component_1 = require("./flyout.component");
var flyout_action_creator_1 = require("./flyout.action-creator");
var reducers = require("./flyout.reducers");
var actions = require("./flyout.actions");
var app = angular.module("app.flyout", [
    "app.core"
]);
core_1.provide(app, flyout_action_creator_1.FlyoutActionCreator);
app.component(flyout_component_1.FlyoutComponent);
app.config(["reducersProvider", function (reducersProvider) {
        for (var reducer in reducers) {
            reducersProvider.configure(reducers[reducer]);
        }
    }]);
for (var action in actions) {
    core_1.provideAction(app, actions[action]);
}
//# sourceMappingURL=index.js.map