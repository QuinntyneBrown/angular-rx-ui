require("../core");

import { provide, provideAction } from "../core";
import { HeroComponent } from "./hero.component";
import { HeroActionCreator } from "./hero.action-creator";
import *  as reducers from "./hero.reducers";
import *  as actions from "./hero.actions";

var app = (<any>angular.module("app.hero", [
    "app.core"    
]));

provide(app,HeroActionCreator);

app.component(HeroComponent);

app.config(["reducersProvider", reducersProvider => {	
    for (var reducer in reducers) { reducersProvider.configure(reducers[reducer]); }
}]);

for (var action in actions) { provideAction(app, actions[action]); }
