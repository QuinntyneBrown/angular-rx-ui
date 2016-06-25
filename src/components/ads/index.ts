require("../core");

import { provide, provideAction } from "../core";
import { AdsComponent } from "./ads.component";
import { AdsActionCreator } from "./ads.action-creator";
import *  as reducers from "./ads.reducers";
import *  as actions from "./ads.actions";

var app = (<any>angular.module("app.ads", [
    "app.core"    
]));

provide(app,AdsActionCreator);

app.component(AdsComponent);

app.config(["reducersProvider", reducersProvider => {	
    for (var reducer in reducers) { reducersProvider.configure(reducers[reducer]); }
}]);

for (var action in actions) { provideAction(app, actions[action]); }
