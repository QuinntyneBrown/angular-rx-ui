require("../core");

import { provide } from "../core";
import { UserEditorComponent } from "./user-editor.component";
import { UserListComponent } from "./user-list.component";
import { UserComponent } from "./user.component";
import { UsersContainerComponent } from "./users-container.component";
import { UserActionCreator } from "./user.actions";
import { UserService } from "./user.service";
import *  as reducers from "./user.reducers";

var app = (<any>angular.module("app.user", [
    "app.core"    
]));

provide(app,UserActionCreator);
provide(app,UserService);
app.component(UserEditorComponent);
app.component(UserListComponent);
app.component(UserComponent);
app.component(UsersContainerComponent);

app.config(["reducersProvider", reducersProvider => {	
    for (var reducer in reducers) { reducersProvider.configure(reducers[reducer]); }
}]);
