require("../core");

import { provide, provideAction } from "../core";
import { HamburgerButtonComponent } from "./hamburger-button.component";
import { HamburgerButtonActionCreator } from "./hamburger-button.action-creator";
import *  as reducers from "./hamburger-button.reducers";
import *  as actions from "./hamburger-button.actions";

var app = (<any>angular.module("app.hamburgerButton", [
    "app.core"    
]));

provide(app,HamburgerButtonActionCreator);

app.component(HamburgerButtonComponent);

app.config(["reducersProvider", reducersProvider => {	
    for (var reducer in reducers) { reducersProvider.configure(reducers[reducer]); }
}]);

for (var action in actions) { provideAction(app, actions[action]); }
