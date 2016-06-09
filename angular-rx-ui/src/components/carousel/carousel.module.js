"use strict";
require("../core/core.module");
var core_1 = require("../core");
var carousel_component_1 = require("./carousel.component");
var carousel_action_creator_1 = require("./carousel.action-creator");
var reducers = require("./carousel.reducers");
var actions = require("./carousel.actions");
var app = angular.module("app.carousel", [
    "app.core"
]);
core_1.provide(app, carousel_action_creator_1.CarouselActionCreator);
app.component(carousel_component_1.CarouselComponent);
app.config(["reducersProvider", function (reducersProvider) {
        for (var reducer in reducers) {
            reducersProvider.configure(reducers[reducer]);
        }
    }]);
for (var action in actions) {
    core_1.provideAction(app, actions[action]);
}
//# sourceMappingURL=carousel.module.js.map