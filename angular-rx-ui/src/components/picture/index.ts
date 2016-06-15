require("../core");

import { provide, provideAction } from "../core";
import { PictureComponent } from "./picture.component";
import { PictureActionCreator } from "./picture.action-creator";
import *  as reducers from "./picture.reducers";
import *  as actions from "./picture.actions";

var app = (<any>angular.module("app.picture", [
    "app.core"    
]));

provide(app,PictureActionCreator);

app.component(PictureComponent);

app.config(["reducersProvider", reducersProvider => {	
    for (var reducer in reducers) { reducersProvider.configure(reducers[reducer]); }
}]);

for (var action in actions) { provideAction(app, actions[action]); }
