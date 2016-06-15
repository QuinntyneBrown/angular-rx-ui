require("../core");

import { provide, provideAction } from "../core";
import { AuthorComponent } from "./author.component";
import { AuthorActionCreator } from "./author.action-creator";
import *  as reducers from "./author.reducers";
import *  as actions from "./author.actions";

var app = (<any>angular.module("app.author", [
    "app.core"    
]));

provide(app,AuthorActionCreator);

app.component(AuthorComponent);

app.config(["reducersProvider", reducersProvider => {	
    for (var reducer in reducers) { reducersProvider.configure(reducers[reducer]); }
}]);

for (var action in actions) { provideAction(app, actions[action]); }
