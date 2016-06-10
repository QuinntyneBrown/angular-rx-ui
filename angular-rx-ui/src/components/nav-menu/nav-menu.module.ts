require("../core/core.module");

import { provide, provideAction } from "../core";
import { NavMenuComponent } from "./nav-menu.component";
import { NavMenuActionCreator } from "./nav-menu.action-creator";
import *  as reducers from "./nav-menu.reducers";
import *  as actions from "./nav-menu.actions";

var app = (<any>angular.module("app.navMenu", [
    "app.core"    
]));

provide(app,NavMenuActionCreator);

app.component(NavMenuComponent);

app.config(["reducersProvider", reducersProvider => {	
    for (var reducer in reducers) { reducersProvider.configure(reducers[reducer]); }
}]);

for (var action in actions) { provideAction(app, actions[action]); }
