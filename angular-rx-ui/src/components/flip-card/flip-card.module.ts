require("../core");

import { provide } from "../core";

import { FlipCardComponent } from "./flip-card.component";
import { FlipCardBackComponent } from "./flip-card-back.component";
import { FlipCardFrontComponent } from "./flip-card-front.component";

import { FlipCardActionCreator } from "./flip-card.action-creator";
import *  as reducers from "./flip-card.reducers";

var app = (<any>angular.module("app.flipCard", [
    "app.core"    
]));

provide(app, FlipCardActionCreator);
app.component(FlipCardComponent);
app.component(FlipCardFrontComponent);
app.component(FlipCardBackComponent);

app.config(["reducersProvider", reducersProvider => {	
    for (var reducer in reducers) { reducersProvider.configure(reducers[reducer]); }
}]);
