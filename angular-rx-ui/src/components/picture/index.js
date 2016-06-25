"use strict";
require("../core");
var core_1 = require("../core");
var picture_component_1 = require("./picture.component");
var picture_upload_component_1 = require("./picture-upload.component");
var picture_action_creator_1 = require("./picture.action-creator");
var picture_service_1 = require("./picture.service");
var reducers = require("./picture.reducers");
var actions = require("./picture.actions");
var app = angular.module("app.picture", [
    "app.core"
]);
core_1.provide(app, picture_action_creator_1.PictureActionCreator);
core_1.provide(app, picture_service_1.PictureService);
app.component(picture_upload_component_1.PictureUploadComponent);
app.component(picture_component_1.PictureComponent);
app.config(["reducersProvider", function (reducersProvider) {
        for (var reducer in reducers) {
            reducersProvider.configure(reducers[reducer]);
        }
    }]);
for (var action in actions) {
    core_1.provideAction(app, actions[action]);
}
//# sourceMappingURL=index.js.map