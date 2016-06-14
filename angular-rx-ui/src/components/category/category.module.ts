require("../core/core.module");

import { provide, provideAction } from "../core";
import { CategoryComponent } from "./category.component";
import { CategoryActionCreator } from "./category.action-creator";
import *  as reducers from "./category.reducers";
import *  as actions from "./category.actions";

var app = (<any>angular.module("app.category", [
    "app.core"    
]));

provide(app,CategoryActionCreator);

app.component(CategoryComponent);

app.config(["reducersProvider", reducersProvider => {	
    for (var reducer in reducers) { reducersProvider.configure(reducers[reducer]); }
}]);

for (var action in actions) { provideAction(app, actions[action]); }
