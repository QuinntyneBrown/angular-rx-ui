"use strict";
require("../core");
var core_1 = require("../core");
var window_action_creator_1 = require("./window.action-creator");
var reducers = require("./window.reducers");
var actions = require("./window.actions");
var app = angular.module("app.window", [
    "app.core"
]);
core_1.provide(app, window_action_creator_1.WindowActionCreator);
app.config(["reducersProvider", function (reducersProvider) {
        for (var reducer in reducers) {
            reducersProvider.configure(reducers[reducer]);
        }
    }]);
for (var action in actions) {
    core_1.provideAction(app, actions[action]);
}
app.run(["windowActionCreator", function (windowActionCreator) { }]);
//# sourceMappingURL=index.js.map