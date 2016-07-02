"use strict";
require("../core");
var core_1 = require("../core");
var login_component_1 = require("./login.component");
var login_container_component_1 = require("./login-container.component");
var login_action_creator_1 = require("./login.action-creator");
var login_service_1 = require("./login.service");
var reducers = require("./login.reducers");
var app = angular.module("app.login", [
    "app.core"
]);
core_1.provide(app, login_action_creator_1.LoginActionCreator);
core_1.provide(app, login_service_1.LoginService);
app.component(login_component_1.LoginComponent);
app.component(login_container_component_1.LoginContainerComponent);
app.config(["reducersProvider", function (reducersProvider) {
        for (var reducer in reducers) {
            reducersProvider.configure(reducers[reducer]);
        }
    }]);
//# sourceMappingURL=index.js.map