require("../core");

import { provide, provideAction } from "../core";
import { SocialShareComponent } from "./social-share.component";
import { SocialShareIconsComponent } from "./social-share-icons.component";
import { SocialShareActionCreator } from "./social-share.action-creator";
import *  as reducers from "./social-share.reducers";
import *  as actions from "./social-share.actions";

var app = (<any>angular.module("app.socialShare", [
    "app.core"    
]));

provide(app,SocialShareActionCreator);

app.component(SocialShareComponent);
app.component(SocialShareIconsComponent);

app.config(["reducersProvider", reducersProvider => {	
    for (var reducer in reducers) { reducersProvider.configure(reducers[reducer]); }
}]);

for (var action in actions) { provideAction(app, actions[action]); }
