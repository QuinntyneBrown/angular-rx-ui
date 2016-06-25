"use strict";
require("../core");
var core_1 = require("../core");
var tag_list_component_1 = require("./tag-list.component");
var tag_action_creator_1 = require("./tag.action-creator");
var reducers = require("./tag.reducers");
var actions = require("./tag.actions");
var app = angular.module("app.tag", [
    "app.core"
]);
core_1.provide(app, tag_action_creator_1.TagActionCreator);
app.component(tag_list_component_1.TagListComponent);
app.config(["reducersProvider", function (reducersProvider) {
        for (var reducer in reducers) {
            reducersProvider.configure(reducers[reducer]);
        }
    }]);
for (var action in actions) {
    core_1.provideAction(app, actions[action]);
}
//# sourceMappingURL=index.js.map