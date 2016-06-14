require("../core");

import { provide, provideAction } from "../core";
import { WindowActionCreator } from "./window.action-creator";
import *  as reducers from "./window.reducers";
import *  as actions from "./window.actions";

var app = (<any>angular.module("app.window", [
    "app.core"    
]));

provide(app,WindowActionCreator);


app.config(["reducersProvider", reducersProvider => {	
    for (var reducer in reducers) { reducersProvider.configure(reducers[reducer]); }
}]);

for (var action in actions) { provideAction(app, actions[action]); }


app.run(["windowActionCreator", windowActionCreator => { }]);