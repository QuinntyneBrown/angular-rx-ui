"use strict";
require("../core");
var core_1 = require("../core");
var ngrx_footer_component_1 = require("./ngrx-footer.component");
var ngrx_footer_action_creator_1 = require("./ngrx-footer.action-creator");
var reducers = require("./ngrx-footer.reducers");
var actions = require("./ngrx-footer.actions");
var app = angular.module("app.ngrxFooter", [
    "app.core"
]);
core_1.provide(app, ngrx_footer_action_creator_1.NgrxFooterActionCreator);
app.component(ngrx_footer_component_1.NgrxFooterComponent);
app.config(["reducersProvider", function (reducersProvider) {
        for (var reducer in reducers) {
            reducersProvider.configure(reducers[reducer]);
        }
    }]);
for (var action in actions) {
    core_1.provideAction(app, actions[action]);
}
//# sourceMappingURL=index.js.map