require("../core");

import { provide, provideAction } from "../core";
import { FlyoutComponent } from "./flyout.component";
import { FlyoutActionCreator } from "./flyout.action-creator";
import *  as reducers from "./flyout.reducers";
import *  as actions from "./flyout.actions";

var app = (<any>angular.module("app.flyout", [
    "app.core"    
]));

provide(app,FlyoutActionCreator);

app.component(FlyoutComponent);

app.config(["reducersProvider", reducersProvider => {	
    for (var reducer in reducers) { reducersProvider.configure(reducers[reducer]); }
}]);

for (var action in actions) { provideAction(app, actions[action]); }
