"use strict";
require("../core");
var core_1 = require("../core");
var ngrx_header_component_1 = require("./ngrx-header.component");
var ngrx_header_action_creator_1 = require("./ngrx-header.action-creator");
var reducers = require("./ngrx-header.reducers");
var actions = require("./ngrx-header.actions");
var app = angular.module("app.ngrxHeader", [
    "app.core"
]);
core_1.provide(app, ngrx_header_action_creator_1.NgrxHeaderActionCreator);
app.component(ngrx_header_component_1.NgrxHeaderComponent);
app.config(["reducersProvider", function (reducersProvider) {
        for (var reducer in reducers) {
            reducersProvider.configure(reducers[reducer]);
        }
    }]);
for (var action in actions) {
    core_1.provideAction(app, actions[action]);
}
//# sourceMappingURL=index.js.map