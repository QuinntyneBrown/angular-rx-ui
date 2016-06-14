"use strict";
require("../core");
var core_1 = require("../core");
var article_author_component_1 = require("./article-author.component");
var article_social_share_component_1 = require("./article-social-share.component");
var blog_detail_component_1 = require("./blog-detail.component");
var blog_header_component_1 = require("./blog-header.component");
var blog_list_component_1 = require("./blog-list.component");
var blog_list_item_component_1 = require("./blog-list-item.component");
var blog_action_creator_1 = require("./blog.action-creator");
var reducers = require("./blog.reducers");
var actions = require("./blog.actions");
var app = angular.module("app.blog", [
    "ngSanitize",
    "app.core"
]);
core_1.provide(app, blog_action_creator_1.BlogActionCreator);
app.component(blog_detail_component_1.BlogDetailComponent);
app.component(blog_header_component_1.BlogHeaderComponent);
app.component(blog_list_component_1.BlogListComponent);
app.component(blog_list_item_component_1.BlogListItemComponent);
app.component(article_author_component_1.ArticleAuthorComponent);
app.component(article_social_share_component_1.ArticleSocialShareComponent);
app.config(["reducersProvider", function (reducersProvider) {
        for (var reducer in reducers) {
            reducersProvider.configure(reducers[reducer]);
        }
    }]);
for (var action in actions) {
    core_1.provideAction(app, actions[action]);
}
//# sourceMappingURL=index.js.map