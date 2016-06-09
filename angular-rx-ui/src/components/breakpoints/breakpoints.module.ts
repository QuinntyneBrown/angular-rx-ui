require("../core/core.module");

import { provide, provideAction } from "../core";
import { BreakpointsActionCreator } from "./breakpoints.action-creator";
import *  as reducers from "./breakpoints.reducers";
import *  as actions from "./breakpoints.actions";

var app = (<any>angular.module("app.breakpoints", [
    "app.core"    
]));

provide(app,BreakpointsActionCreator);

app.config(["reducersProvider", reducersProvider => {	
    for (var reducer in reducers) { reducersProvider.configure(reducers[reducer]); }
}]);

for (var action in actions) { provideAction(app, actions[action]); }

app.run(["breakpointsActionCreator", breakpointsActionCreator => { }]);
