"use strict";
require("../core");
var core_1 = require("../core");
var file_explorer_component_1 = require("./file-explorer.component");
var file_explorer_action_creator_1 = require("./file-explorer.action-creator");
var reducers = require("./file-explorer.reducers");
var actions = require("./file-explorer.actions");
var app = angular.module("app.fileExplorer", [
    "app.core"
]);
core_1.provide(app, file_explorer_action_creator_1.FileExplorerActionCreator);
app.component(file_explorer_component_1.FileExplorerComponent);
app.config(["reducersProvider", function (reducersProvider) {
        for (var reducer in reducers) {
            reducersProvider.configure(reducers[reducer]);
        }
    }]);
for (var action in actions) {
    core_1.provideAction(app, actions[action]);
}
//# sourceMappingURL=index.js.map