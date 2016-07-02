require("../core");

import { provide } from "../core";

import { LoginComponent } from "./login.component";
import { LoginContainerComponent } from "./login-container.component";
import { LoginActionCreator } from "./login.action-creator";
import { LoginService } from "./login.service";
import * as reducers from "./login.reducers";

let app = (<any>angular.module("app.login", [
    "app.core"    
]));

provide(app, LoginActionCreator);
provide(app, LoginService);

app.component(LoginComponent);
app.component(LoginContainerComponent);

app.config(["reducersProvider", reducersProvider => {	
    for (var reducer in reducers) { reducersProvider.configure(reducers[reducer]); }
}]);
