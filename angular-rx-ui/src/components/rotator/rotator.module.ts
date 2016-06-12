require("../core");
import { provide } from "../core";

import { RotatorComponent } from "./rotator.component";
import { RotatorActionCreator } from "./rotator.action-creator";
import *  as reducers from "./rotator.reducers";

let app = (<any>angular.module("app.rotator", [
    "app.core"    
]));

provide(app, RotatorActionCreator);

app.component(RotatorComponent);

app.config(["reducersProvider", reducersProvider => {	
    for (var reducer in reducers) { reducersProvider.configure(reducers[reducer]); }
}]);
