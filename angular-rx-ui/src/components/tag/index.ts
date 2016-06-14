require("../core");

import { provide, provideAction } from "../core";
import { TagListComponent } from "./tag-list.component";
import { TagActionCreator } from "./tag.action-creator";
import *  as reducers from "./tag.reducers";
import *  as actions from "./tag.actions";

var app = (<any>angular.module("app.tag", [
    "app.core"    
]));

provide(app,TagActionCreator);

app.component(TagListComponent);

app.config(["reducersProvider", reducersProvider => {	
    for (var reducer in reducers) { reducersProvider.configure(reducers[reducer]); }
}]);

for (var action in actions) { provideAction(app, actions[action]); }
