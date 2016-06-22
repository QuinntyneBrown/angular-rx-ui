require("../core");

import { provide, provideAction } from "../core";
import { BoldButtonComponent } from "./bold-button.component";
import { BoldButtonActionCreator } from "./bold-button.action-creator";
import *  as reducers from "./bold-button.reducers";
import *  as actions from "./bold-button.actions";

var app = (<any>angular.module("app.boldButton", [
    "app.core"    
]));

provide(app,BoldButtonActionCreator);

app.component(BoldButtonComponent);

app.config(["reducersProvider", reducersProvider => {	
    for (var reducer in reducers) { reducersProvider.configure(reducers[reducer]); }
}]);

for (var action in actions) { provideAction(app, actions[action]); }
