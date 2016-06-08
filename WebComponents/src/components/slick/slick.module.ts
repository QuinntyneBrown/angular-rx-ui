require("../core/core.module");

import { provide, provideAction } from "../core";
import { SlickComponent } from "./slick.component";
import { SlickActionCreator } from "./slick.action-creator";
import *  as reducers from "./slick.reducers";
import *  as actions from "./slick.actions";

var app = (<any>angular.module("app.slick", [
    "app.core"    
]));

provide(app,SlickActionCreator);

app.component(SlickComponent);

app.config(["reducersProvider", reducersProvider => {	
    for (var reducer in reducers) { reducersProvider.configure(reducers[reducer]); }
}]);

for (var action in actions) { provideAction(app, actions[action]); }
