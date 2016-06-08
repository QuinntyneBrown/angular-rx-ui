"use strict";
require("../core/core.module");
var core_1 = require("../core");
var slick_component_1 = require("./slick.component");
var slick_action_creator_1 = require("./slick.action-creator");
var reducers = require("./slick.reducers");
var actions = require("./slick.actions");
var app = angular.module("app.slick", [
    "app.core"
]);
core_1.provide(app, slick_action_creator_1.SlickActionCreator);
app.component(slick_component_1.SlickComponent);
app.config(["reducersProvider", function (reducersProvider) {
        for (var reducer in reducers) {
            reducersProvider.configure(reducers[reducer]);
        }
    }]);
for (var action in actions) {
    core_1.provideAction(app, actions[action]);
}
//# sourceMappingURL=slick.module.js.map