"use strict";
require("../core");
require("../backdrop");
var core_1 = require("../core");
var modal_action_creator_1 = require("./modal.action-creator");
var modal_service_1 = require("./modal.service");
var reducers = require("./modal.reducers");
var actions = require("./modal.actions");
var modal_component_1 = require("./modal.component");
var modal_title_component_1 = require("./modal-title.component");
var modal_content_component_1 = require("./modal-content.component");
var app = angular.module("app.modal", [
    "app.core",
    "app.backdrop"
]);
core_1.provide(app, modal_action_creator_1.ModalActionCreator);
core_1.provide(app, modal_service_1.Modal);
app.component(modal_component_1.ModalComponent);
app.component(modal_title_component_1.ModalTitleComponent);
app.component(modal_content_component_1.ModalContentComponent);
app.config(["reducersProvider", function (reducersProvider) {
        for (var reducer in reducers) {
            reducersProvider.configure(reducers[reducer]);
        }
    }]);
for (var action in actions) {
    core_1.provideAction(app, actions[action]);
}
app.run(["modal", "modalActionCreator", function (modal, modalActionCreator) { }]);
//# sourceMappingURL=index.js.map