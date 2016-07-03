require("../core");

import { TabContentComponent } from "./tab-content.component";
import { TabTitleComponent } from "./tab-title.component";
import { TabsComponent } from "./tabs.component";
import { TabsActionCreator } from "./tabs.action-creator";
import * as reducers from "./tabs.reducers";
import { provide, } from "../core";

var app = (<any>angular.module("app.tabs", [
    "app.core"
]));

provide(app, TabsActionCreator);

app.component(TabContentComponent);
app.component(TabTitleComponent);
app.component(TabsComponent);

app.config(["reducersProvider", reducersProvider => {	
	reducersProvider.configure(reducers.setCurrentTabReducer);
    reducersProvider.configure(reducers.tabChildLoadedReducer);
}]);

app.config(["initialStateProvider", "localStorageManagerProvider", (initialStateProvider, localStorageManagerProvider) => {
    var localStorageInitialState = localStorageManagerProvider.get({ name: "initialState" });
    if (!localStorageInitialState)
        localStorageManagerProvider.put({
            name: "initialState", value: {
                tabIndex: {}
            }
        });
    var initialState = localStorageManagerProvider.get({ name: "initialState" });

    initialState.tabIndex = initialState.tabIndex || {};

    initialStateProvider.configure(initialState);
}]);