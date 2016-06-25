"use strict";
require("../core");
var core_1 = require("../core");
var carousel_action_panel_component_1 = require("./carousel-action-panel.component");
var carousel_action_panel_action_creator_1 = require("./carousel-action-panel.action-creator");
var reducers = require("./carousel-action-panel.reducers");
var actions = require("./carousel-action-panel.actions");
var app = angular.module("app.carouselActionPanel", [
    "app.core",
    "app.rotator",
]);
core_1.provide(app, carousel_action_panel_action_creator_1.CarouselActionPanelActionCreator);
app.component(carousel_action_panel_component_1.CarouselActionPanelComponent);
app.config(["reducersProvider", function (reducersProvider) {
        for (var reducer in reducers) {
            reducersProvider.configure(reducers[reducer]);
        }
    }]);
for (var action in actions) {
    core_1.provideAction(app, actions[action]);
}
//# sourceMappingURL=index.js.map