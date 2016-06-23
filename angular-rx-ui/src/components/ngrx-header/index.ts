require("../core");

import { provide, provideAction } from "../core";
import { NgrxHeaderComponent } from "./ngrx-header.component";
import { NgrxHeaderActionCreator } from "./ngrx-header.action-creator";
import *  as reducers from "./ngrx-header.reducers";
import *  as actions from "./ngrx-header.actions";

var app = (<any>angular.module("app.ngrxHeader", [
    "app.core"    
]));

provide(app,NgrxHeaderActionCreator);

app.component(NgrxHeaderComponent);

app.config(["reducersProvider", reducersProvider => {	
    for (var reducer in reducers) { reducersProvider.configure(reducers[reducer]); }
}]);

for (var action in actions) { provideAction(app, actions[action]); }
