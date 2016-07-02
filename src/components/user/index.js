"use strict";
require("../core");
var core_1 = require("../core");
var user_editor_component_1 = require("./user-editor.component");
var user_list_component_1 = require("./user-list.component");
var user_component_1 = require("./user.component");
var users_container_component_1 = require("./users-container.component");
var user_actions_1 = require("./user.actions");
var user_service_1 = require("./user.service");
var reducers = require("./user.reducers");
var app = angular.module("app.user", [
    "app.core"
]);
core_1.provide(app, user_actions_1.UserActionCreator);
core_1.provide(app, user_service_1.UserService);
app.component(user_editor_component_1.UserEditorComponent);
app.component(user_list_component_1.UserListComponent);
app.component(user_component_1.UserComponent);
app.component(users_container_component_1.UsersContainerComponent);
app.config(["reducersProvider", function (reducersProvider) {
        for (var reducer in reducers) {
            reducersProvider.configure(reducers[reducer]);
        }
    }]);
//# sourceMappingURL=index.js.map