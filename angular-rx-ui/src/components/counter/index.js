"use strict";
require("../core");
var core_1 = require("../core");
var counter_component_1 = require("./counter.component");
var counter_action_creator_1 = require("./counter.action-creator");
var actions = require("./counter.actions");
var reducers = require("./counter.reducers");
var app = angular.module("app.counter", [
    "app.core"
]);
core_1.provide(app, counter_action_creator_1.CounterActionCreator);
app.component(counter_component_1.CounterComponent);
for (var action in actions) {
    core_1.provideAction(app, actions[action]);
}
app.config(["reducersProvider", function (reducersProvider) {
        for (var reducer in reducers) {
            reducersProvider.configure(reducers[reducer]);
        }
    }]);
//# sourceMappingURL=index.js.map