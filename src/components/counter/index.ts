require("../core");

import { provide, provideAction } from "../core";
import { CounterComponent } from "./counter.component";
import { CounterActionCreator } from "./counter.action-creator";
import *  as actions from "./counter.actions";
import *  as reducers from "./counter.reducers";

var app = (<any>angular.module("app.counter", [
    "app.core"    
]));

provide(app,CounterActionCreator);

app.component(CounterComponent);

for (var action in actions) { provideAction(app, actions[action]); }

app.config(["reducersProvider", reducersProvider => {	    
    for (var reducer in reducers) { reducersProvider.configure(reducers[reducer]); }
}]);
