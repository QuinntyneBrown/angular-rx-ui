require("../core/core.module");

import { provide, provideAction } from "../core";
import { CarouselComponent } from "./carousel.component";
import { CarouselActionCreator } from "./carousel.action-creator";
import *  as reducers from "./carousel.reducers";
import *  as actions from "./carousel.actions";

var app = (<any>angular.module("app.carousel", [
    "app.core"    
]));

provide(app,CarouselActionCreator);

app.component(CarouselComponent);

app.config(["reducersProvider", reducersProvider => {	
    for (var reducer in reducers) { reducersProvider.configure(reducers[reducer]); }
}]);

for (var action in actions) { provideAction(app, actions[action]); }
