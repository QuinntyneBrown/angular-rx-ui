require("../core");

import { provide, provideAction } from "../core";
import { FileExplorerComponent } from "./file-explorer.component";
import { FileExplorerActionCreator } from "./file-explorer.action-creator";
import *  as reducers from "./file-explorer.reducers";
import *  as actions from "./file-explorer.actions";

var app = (<any>angular.module("app.fileExplorer", [
    "app.core"    
]));

provide(app,FileExplorerActionCreator);

app.component(FileExplorerComponent);

app.config(["reducersProvider", reducersProvider => {	
    for (var reducer in reducers) { reducersProvider.configure(reducers[reducer]); }
}]);

for (var action in actions) { provideAction(app, actions[action]); }
