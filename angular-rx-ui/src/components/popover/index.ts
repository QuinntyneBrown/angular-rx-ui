require("../core");

import { provide, provideAction } from "../core";
import { PopoverComponent } from "./popover.component";
import { PopoverActionCreator } from "./popover.action-creator";
import *  as reducers from "./popover.reducers";
import *  as actions from "./popover.actions";

var app = (<any>angular.module("app.popover", [
    "app.core"    
]));

provide(app,PopoverActionCreator);

app.component(PopoverComponent);

app.config(["reducersProvider", reducersProvider => {	
    for (var reducer in reducers) { reducersProvider.configure(reducers[reducer]); }
}]);

for (var action in actions) { provideAction(app, actions[action]); }
