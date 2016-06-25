require("../core");

import { provide, provideAction } from "../core";
import { ErrorListComponent } from "./error-list.component";
import { ErrorConfig } from "./error-config.service";
import { ErrorConfigProvider } from "./error-config.provider";
import { ErrorListActionCreator } from "./error-list.action-creator";
import *  as reducers from "./error-list.reducers";
import *  as actions from "./error-list.actions";

var app = (<any>angular.module("app.errorList", [
    "app.core"    
]));

provide(app, ErrorListActionCreator);

app.provider("ErrorConfig", ErrorConfigProvider);

app.component(ErrorListComponent);

app.config(["reducersProvider", reducersProvider => {	
    for (var reducer in reducers) { reducersProvider.configure(reducers[reducer]); }
}]);

for (var action in actions) { provideAction(app, actions[action]); }
