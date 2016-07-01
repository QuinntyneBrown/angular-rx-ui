require("../core");

import { provide, provideAction } from "../core";
import { UiComponent } from "./ui.component";
import { UiActionCreator } from "./ui.action-creator";
import *  as reducers from "./ui.reducers";
import *  as actions from "./ui.actions";

var app = (<any>angular.module("app.ui", [
    "app.core"    
]));

provide(app,UiActionCreator);

app.component(UiComponent);

app.config(["reducersProvider", reducersProvider => {	
    for (var reducer in reducers) { reducersProvider.configure(reducers[reducer]); }
}]);

for (var action in actions) { provideAction(app, actions[action]); }
