"use strict";
require("../core");
var core_1 = require("../core");
var nav_menu_component_1 = require("./nav-menu.component");
var nav_menu_action_creator_1 = require("./nav-menu.action-creator");
var reducers = require("./nav-menu.reducers");
var actions = require("./nav-menu.actions");
var app = angular.module("app.navMenu", [
    "app.core"
]);
core_1.provide(app, nav_menu_action_creator_1.NavMenuActionCreator);
app.component(nav_menu_component_1.NavMenuComponent);
app.config(["reducersProvider", function (reducersProvider) {
        for (var reducer in reducers) {
            reducersProvider.configure(reducers[reducer]);
        }
    }]);
for (var action in actions) {
    core_1.provideAction(app, actions[action]);
}
//# sourceMappingURL=index.js.map