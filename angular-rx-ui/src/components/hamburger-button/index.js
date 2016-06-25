"use strict";
require("../core");
var core_1 = require("../core");
var hamburger_button_component_1 = require("./hamburger-button.component");
var hamburger_button_action_creator_1 = require("./hamburger-button.action-creator");
var reducers = require("./hamburger-button.reducers");
var actions = require("./hamburger-button.actions");
var app = angular.module("app.hamburgerButton", [
    "app.core"
]);
core_1.provide(app, hamburger_button_action_creator_1.HamburgerButtonActionCreator);
app.component(hamburger_button_component_1.HamburgerButtonComponent);
app.config(["reducersProvider", function (reducersProvider) {
        for (var reducer in reducers) {
            reducersProvider.configure(reducers[reducer]);
        }
    }]);
for (var action in actions) {
    core_1.provideAction(app, actions[action]);
}
//# sourceMappingURL=index.js.map