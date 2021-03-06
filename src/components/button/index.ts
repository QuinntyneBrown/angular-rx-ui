require("../core");

import { provide, provideAction } from "../core";
import { BoldButtonComponent } from "./bold-button.component";
import { ButtonComponent } from "./button.component";
import { ButtonActionCreator } from "./button.action-creator";
import *  as reducers from "./button.reducers";
import *  as actions from "./button.actions";

var app = (<any>angular.module("app.button", [
    "app.core"    
]));

provide(app,ButtonActionCreator);

app.component(BoldButtonComponent);
app.component(ButtonComponent);

app.config(["reducersProvider", reducersProvider => {	
    for (var reducer in reducers) { reducersProvider.configure(reducers[reducer]); }
}]);

for (var action in actions) { provideAction(app, actions[action]); }
