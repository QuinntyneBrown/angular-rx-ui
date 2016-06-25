"use strict";
require("../core");
var core_1 = require("../core");
var category_list_component_1 = require("./category-list.component");
var category_list_for_item_component_1 = require("./category-list-for-item.component");
var category_action_creator_1 = require("./category.action-creator");
var reducers = require("./category.reducers");
var actions = require("./category.actions");
var app = angular.module("app.category", [
    "app.core"
]);
core_1.provide(app, category_action_creator_1.CategoryActionCreator);
app.component(category_list_component_1.CategoryListComponent);
app.component(category_list_for_item_component_1.CategoryListForItemComponent);
app.config(["reducersProvider", function (reducersProvider) {
        for (var reducer in reducers) {
            reducersProvider.configure(reducers[reducer]);
        }
    }]);
for (var action in actions) {
    core_1.provideAction(app, actions[action]);
}
//# sourceMappingURL=index.js.map