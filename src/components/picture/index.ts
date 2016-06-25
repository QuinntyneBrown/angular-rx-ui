require("../core");

import { provide, provideAction } from "../core";
import { PictureComponent } from "./picture.component";
import { PictureUploadComponent } from "./picture-upload.component";
import { PictureActionCreator } from "./picture.action-creator";
import { PictureService } from "./picture.service";
import *  as reducers from "./picture.reducers";
import *  as actions from "./picture.actions";

var app = (<any>angular.module("app.picture", [
    "app.core"    
]));

provide(app,PictureActionCreator);
provide(app, PictureService);

app.component(PictureUploadComponent);
app.component(PictureComponent);

app.config(["reducersProvider", reducersProvider => {	
    for (var reducer in reducers) { reducersProvider.configure(reducers[reducer]); }
}]);

for (var action in actions) { provideAction(app, actions[action]); }
