require("../core");

import { provide, provideAction } from "../core";
import { CategoryListComponent } from "./category-list.component";
import { CategoryListForItemComponent } from "./category-list-for-item.component";
import { CategoryActionCreator } from "./category.action-creator";
import *  as reducers from "./category.reducers";
import *  as actions from "./category.actions";

var app = (<any>angular.module("app.category", [
    "app.core"    
]));

provide(app,CategoryActionCreator);

app.component(CategoryListComponent);
app.component(CategoryListForItemComponent);

app.config(["reducersProvider", reducersProvider => {	
    for (var reducer in reducers) { reducersProvider.configure(reducers[reducer]); }
}]);

for (var action in actions) { provideAction(app, actions[action]); }
