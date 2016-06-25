"use strict";
require("../core");
var core_1 = require("../core");
var button_component_1 = require("./button.component");
var bold_button_component_1 = require("./bold-button.component");
var button_action_creator_1 = require("./button.action-creator");
var reducers = require("./button.reducers");
var actions = require("./button.actions");
var app = angular.module("app.button", [
    "app.core"
]);
core_1.provide(app, button_action_creator_1.ButtonActionCreator);
app.component(button_component_1.ButtonComponent);
app.component(bold_button_component_1.BoldButtonComponent);
app.config(["reducersProvider", function (reducersProvider) {
        for (var reducer in reducers) {
            reducersProvider.configure(reducers[reducer]);
        }
    }]);
for (var action in actions) {
    core_1.provideAction(app, actions[action]);
}
//# sourceMappingURL=index.js.map