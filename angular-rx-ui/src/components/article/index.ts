require("../core");

import { provide, provideAction } from "../core";

import { ArticleDetailComponent } from "./article-detail.component";
import { ArticleHeaderComponent } from "./article-header.component";
import { ArticleListComponent } from "./article-list.component";
import { ArticleListItemComponent } from "./article-list-item.component";

import { ArticleActionCreator } from "./article.action-creator";
import * as reducers from "./article.reducers";
import * as actions from "./article.actions";

var app = (<any>angular.module("app.article", [
    "ngSanitize",
    "app.core",

    "app.category",
    "app.socialShare"
]));

provide(app,ArticleActionCreator);

app.component(ArticleDetailComponent);
app.component(ArticleHeaderComponent);
app.component(ArticleListComponent);
app.component(ArticleListItemComponent);

app.config(["reducersProvider", reducersProvider => {	
    for (var reducer in reducers) { reducersProvider.configure(reducers[reducer]); }
}]);

for (var action in actions) { provideAction(app, actions[action]); }
