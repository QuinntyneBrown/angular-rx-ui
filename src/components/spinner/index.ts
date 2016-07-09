require("../core");

import { provide, provideAction } from "../core";
import { SpinnerComponent } from "./spinner.component";
import { SpinnerActionCreator } from "./spinner.action-creator";
import * as reducers from "./spinner.reducers";
import * as actions from "./spinner.actions";

var app = (<any>angular.module("app.spinner", [
    "app.core"    
]));

provide(app,SpinnerActionCreator);

app.component(SpinnerComponent);

app.config(["reducersProvider", reducersProvider => {	
    for (var reducer in reducers) { reducersProvider.configure(reducers[reducer]); }
}]);

for (var action in actions) { provideAction(app, actions[action]); }


