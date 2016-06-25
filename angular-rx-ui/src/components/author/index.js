"use strict";
require("../core");
var core_1 = require("../core");
var author_component_1 = require("./author.component");
var author_action_creator_1 = require("./author.action-creator");
var reducers = require("./author.reducers");
var actions = require("./author.actions");
var app = angular.module("app.author", [
    "app.core"
]);
core_1.provide(app, author_action_creator_1.AuthorActionCreator);
app.component(author_component_1.AuthorComponent);
app.config(["reducersProvider", function (reducersProvider) {
        for (var reducer in reducers) {
            reducersProvider.configure(reducers[reducer]);
        }
    }]);
for (var action in actions) {
    core_1.provideAction(app, actions[action]);
}
//# sourceMappingURL=index.js.map