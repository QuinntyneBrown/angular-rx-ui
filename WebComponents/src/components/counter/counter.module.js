"use strict";
require("../core/core.module");
var core_1 = require("../core");
var counter_component_1 = require("./counter.component");
var counter_actions_1 = require("./counter.actions");
var reducers = require("./counter.reducers");
var app = angular.module("app.counter", [
    "app.core"
]);
core_1.provide(app, counter_actions_1.CounterActionCreator);
var qb = 1;
app.component(counter_component_1.CounterComponent);
app.config(["reducersProvider", function (reducersProvider) {
        for (var reducer in reducers) {
            reducersProvider.configure(reducers[reducer]);
        }
    }]);
//# sourceMappingURL=counter.module.js.map