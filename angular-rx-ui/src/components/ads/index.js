"use strict";
require("../core");
var core_1 = require("../core");
var ads_component_1 = require("./ads.component");
var ads_action_creator_1 = require("./ads.action-creator");
var reducers = require("./ads.reducers");
var actions = require("./ads.actions");
var app = angular.module("app.ads", [
    "app.core"
]);
core_1.provide(app, ads_action_creator_1.AdsActionCreator);
app.component(ads_component_1.AdsComponent);
app.config(["reducersProvider", function (reducersProvider) {
        for (var reducer in reducers) {
            reducersProvider.configure(reducers[reducer]);
        }
    }]);
for (var action in actions) {
    core_1.provideAction(app, actions[action]);
}
//# sourceMappingURL=index.js.map