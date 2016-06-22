require("../core");

import { provide, provideAction } from "../core";
import { PanelComponent } from "./panel.component";
import { PanelActionCreator } from "./panel.action-creator";
import *  as reducers from "./panel.reducers";
import *  as actions from "./panel.actions";

var app = (<any>angular.module("app.panel", [
    "app.core"    
]));

provide(app,PanelActionCreator);

app.component(PanelComponent);

app.config(["reducersProvider", reducersProvider => {	
    for (var reducer in reducers) { reducersProvider.configure(reducers[reducer]); }
}]);

for (var action in actions) { provideAction(app, actions[action]); }
