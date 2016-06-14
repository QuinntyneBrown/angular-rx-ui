"use strict";
require("../core");
var core_1 = require("../core");
var rotator_component_1 = require("./rotator.component");
var rotator_action_creator_1 = require("./rotator.action-creator");
var reducers = require("./rotator.reducers");
var app = angular.module("app.rotator", [
    "ngTouch",
    "app.core"
]);
core_1.provide(app, rotator_action_creator_1.RotatorActionCreator);
app.component(rotator_component_1.RotatorComponent);
app.config(["reducersProvider", function (reducersProvider) {
        for (var reducer in reducers) {
            reducersProvider.configure(reducers[reducer]);
        }
    }]);
//# sourceMappingURL=index.js.map