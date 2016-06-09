"use strict";
require("../core/core.module");
var core_1 = require("../core");
var breakpoints_action_creator_1 = require("./breakpoints.action-creator");
var reducers = require("./breakpoints.reducers");
var actions = require("./breakpoints.actions");
var app = angular.module("app.breakpoints", [
    "app.core"
]);
core_1.provide(app, breakpoints_action_creator_1.BreakpointsActionCreator);
app.config(["reducersProvider", function (reducersProvider) {
        for (var reducer in reducers) {
            reducersProvider.configure(reducers[reducer]);
        }
    }]);
for (var action in actions) {
    core_1.provideAction(app, actions[action]);
}
app.run(["breakpointsActionCreator", function (breakpointsActionCreator) { }]);
//# sourceMappingURL=breakpoints.module.js.map