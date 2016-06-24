require("../core");

import { provide, provideAction, translateXY } from "../core";
import { PopoverComponent } from "./popover.component";
import { PopoverActionCreator } from "./popover.action-creator";
import * as actions from "./popover.actions";
import { Popover } from "./popover.service";
import { Position } from "./position.service";
import { Rectangle } from "./rectangle.service";
import { Ruler } from "./ruler.service";
import { Space } from "./space.service";
import { Template } from "./template.service";

import *  as reducers from "./popover.reducers";

var app = (<any>angular.module("app.popover", [
    "app.core"
]));

provide(app, PopoverActionCreator);
provide(app, Popover);
provide(app, Position);
provide(app, Rectangle);
provide(app, Ruler);
provide(app, Space);
provide(app, Template);

app.value("translateXY", translateXY);

app.config(["reducersProvider", reducersProvider => {
    for (var reducer in reducers) { reducersProvider.configure(reducers[reducer]); }
}]);

app.config(["initialStateProvider", "localStorageManagerProvider", (initialStateProvider, localStorageManagerProvider) => {
    var localStorageInitialState = localStorageManagerProvider.get({ name: "initialState" });
    if (!localStorageInitialState)
        localStorageManagerProvider.put({
            name: "initialState", value: {
                popoverInstances: []
            }
        });
    var initialState = localStorageManagerProvider.get({ name: "initialState" });

    initialState.popoverInstances = initialState.popoverInstances || [];

    initialStateProvider.configure(initialState);
}]);

app.run(["popover", popover => { }]);
