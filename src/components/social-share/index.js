"use strict";
require("../core");
var core_1 = require("../core");
var social_share_component_1 = require("./social-share.component");
var social_share_item_component_1 = require("./social-share-item.component");
var social_share_action_creator_1 = require("./social-share.action-creator");
var reducers = require("./social-share.reducers");
var actions = require("./social-share.actions");
var app = angular.module("app.socialShare", [
    "app.core"
]);
core_1.provide(app, social_share_action_creator_1.SocialShareActionCreator);
app.component(social_share_component_1.SocialShareComponent);
app.component(social_share_item_component_1.SocialShareItemComponent);
app.config(["reducersProvider", function (reducersProvider) {
        for (var reducer in reducers) {
            reducersProvider.configure(reducers[reducer]);
        }
    }]);
for (var action in actions) {
    core_1.provideAction(app, actions[action]);
}
//# sourceMappingURL=index.js.map