require("../core");

import { provide, provideAction } from "../core";
import { WorkSpinnerComponent } from "./work-spinner.component";
import { WorkSpinnerActionCreator } from "./work-spinner.action-creator";
import *  as reducers from "./work-spinner.reducers";
import *  as actions from "./work-spinner.actions";

var app = (<any>angular.module("app.workSpinner", [
    "app.core"    
]));

provide(app,WorkSpinnerActionCreator);

app.component(WorkSpinnerComponent);

app.config(["reducersProvider", reducersProvider => {	
    for (var reducer in reducers) { reducersProvider.configure(reducers[reducer]); }
}]);

for (var action in actions) { provideAction(app, actions[action]); }
