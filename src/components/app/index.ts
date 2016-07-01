require("../core");

import { provide, provideAction } from "../core";
import { AppComponent } from "./app.component";
import { AppActionCreator } from "./app.action-creator";
import *  as reducers from "./app.reducers";
import *  as actions from "./app.actions";

var app = (<any>angular.module("app.app", [
    "app.core"    
]));

provide(app,AppActionCreator);

app.component(AppComponent);

app.config(["reducersProvider", reducersProvider => {	
    for (var reducer in reducers) { reducersProvider.configure(reducers[reducer]); }
}]);

for (var action in actions) { provideAction(app, actions[action]); }
