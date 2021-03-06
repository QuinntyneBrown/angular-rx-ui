require("../core");
require("./paged-list.scss");

import { provide } from "../core";
import { PagedListActionCreator } from "./paged-list.actions";
import { PagingConfigProvider } from "./paging-config-provider";
import * as reducers from "./paged-list.reducers";

export * from "./ipaged-list.d";
export * from "./paged-list.model";
export * from "./to-paged-list-from-in-memory";

var app = (<any>angular.module("app.pagedList", [
    "app.core"    
]));

app.provider("pagingConfigProvider", PagingConfigProvider);

provide(app,PagedListActionCreator);

app.config(["reducersProvider", reducersProvider => {	
    for (var reducer in reducers) { reducersProvider.configure(reducers[reducer]); }
}]);
