require("../core");

import { provide, provideAction } from "../core";
import { CarouselActionPanelComponent } from "./carousel-action-panel.component";
import { CarouselActionPanelActionCreator } from "./carousel-action-panel.action-creator";
import *  as reducers from "./carousel-action-panel.reducers";
import *  as actions from "./carousel-action-panel.actions";

var app = (<any>angular.module("app.carouselActionPanel", [
    "app.core",
    "app.rotator",
]));

provide(app,CarouselActionPanelActionCreator);

app.component(CarouselActionPanelComponent);

app.config(["reducersProvider", reducersProvider => {	
    for (var reducer in reducers) { reducersProvider.configure(reducers[reducer]); }
}]);

for (var action in actions) { provideAction(app, actions[action]); }
