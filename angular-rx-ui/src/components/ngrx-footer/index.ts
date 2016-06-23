require("../core");

import { provide, provideAction } from "../core";
import { NgrxFooterComponent } from "./ngrx-footer.component";
import { NgrxFooterActionCreator } from "./ngrx-footer.action-creator";
import *  as reducers from "./ngrx-footer.reducers";
import *  as actions from "./ngrx-footer.actions";

var app = (<any>angular.module("app.ngrxFooter", [
    "app.core"    
]));

provide(app,NgrxFooterActionCreator);

app.component(NgrxFooterComponent);

app.config(["reducersProvider", reducersProvider => {	
    for (var reducer in reducers) { reducersProvider.configure(reducers[reducer]); }
}]);

for (var action in actions) { provideAction(app, actions[action]); }
