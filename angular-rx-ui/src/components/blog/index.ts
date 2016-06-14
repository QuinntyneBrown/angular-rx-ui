require("../core");

import { provide, provideAction } from "../core";

import { ArticleAuthorComponent } from "./article-author.component";
import { ArticleSocialShareComponent } from "./article-social-share.component";

import { BlogDetailComponent } from "./blog-detail.component";
import { BlogHeaderComponent } from "./blog-header.component";
import { BlogListComponent } from "./blog-list.component";
import { BlogListItemComponent } from "./blog-list-item.component";

import { BlogActionCreator } from "./blog.action-creator";
import *  as reducers from "./blog.reducers";
import *  as actions from "./blog.actions";

var app = (<any>angular.module("app.blog", [
    "ngSanitize",
    "app.core"    
]));

provide(app,BlogActionCreator);

app.component(BlogDetailComponent);
app.component(BlogHeaderComponent);
app.component(BlogListComponent);
app.component(BlogListItemComponent);
app.component(ArticleAuthorComponent);
app.component(ArticleSocialShareComponent);

app.config(["reducersProvider", reducersProvider => {	
    for (var reducer in reducers) { reducersProvider.configure(reducers[reducer]); }
}]);

for (var action in actions) { provideAction(app, actions[action]); }
