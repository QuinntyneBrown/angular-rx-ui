require("../core");
require("../author");
require("../category");
require("../social-share");
require("../tabs");
require("../tag");

import { provide, provideAction } from "../core";

import { ArticleDetailComponent } from "./article-detail.component";
import { ArticleHeaderComponent } from "./article-header.component";
import { ArticleListComponent } from "./article-list.component";
import { ArticleListItemComponent } from "./article-list-item.component";
import { ArticleEditorContainerComponent } from "./article-editor-container.component";
import { ArticleEditorComponent } from "./article-editor.component";
import { ArticleService } from "./article.service";

import { ArticleActionCreator } from "./article.action-creator";
import * as reducers from "./article.reducers";
import * as actions from "./article.actions";

var app = (<any>angular.module("app.article", [
    "ngSanitize",
    "app.core",
    "app.author",
    "app.category",
    "app.socialShare",
    "app.tabs",
    "app.tag"
]));

provide(app,ArticleActionCreator);
provide(app, ArticleService);

app.component(ArticleDetailComponent);
app.component(ArticleHeaderComponent);
app.component(ArticleListComponent);
app.component(ArticleListItemComponent);
app.component(ArticleEditorComponent);
app.component(ArticleEditorContainerComponent);

app.config(["reducersProvider", reducersProvider => {	
    for (var reducer in reducers) { reducersProvider.configure(reducers[reducer]); }
}]);

for (var action in actions) { provideAction(app, actions[action]); }
