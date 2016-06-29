require("../core");

import { provide, provideAction } from "../core";
import { FeaturedTrioComponent } from "./featured-trio.component";
import { FeaturedTrioActionCreator } from "./featured-trio.action-creator";
import *  as reducers from "./featured-trio.reducers";
import *  as actions from "./featured-trio.actions";

var app = (<any>angular.module("app.featuredTrio", [
    "app.core"    
]));

provide(app,FeaturedTrioActionCreator);

app.component(FeaturedTrioComponent);

app.config(["reducersProvider", reducersProvider => {	
    for (var reducer in reducers) { reducersProvider.configure(reducers[reducer]); }
}]);

for (var action in actions) { provideAction(app, actions[action]); }
