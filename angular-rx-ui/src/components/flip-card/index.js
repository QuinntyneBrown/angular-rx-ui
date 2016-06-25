"use strict";
require("../core");
var core_1 = require("../core");
var flip_card_component_1 = require("./flip-card.component");
var flip_card_back_component_1 = require("./flip-card-back.component");
var flip_card_front_component_1 = require("./flip-card-front.component");
var flip_card_action_creator_1 = require("./flip-card.action-creator");
var reducers = require("./flip-card.reducers");
var app = angular.module("app.flipCard", [
    "app.core"
]);
core_1.provide(app, flip_card_action_creator_1.FlipCardActionCreator);
app.component(flip_card_component_1.FlipCardComponent);
app.component(flip_card_front_component_1.FlipCardFrontComponent);
app.component(flip_card_back_component_1.FlipCardBackComponent);
app.config(["reducersProvider", function (reducersProvider) {
        for (var reducer in reducers) {
            reducersProvider.configure(reducers[reducer]);
        }
    }]);
//# sourceMappingURL=index.js.map