"use strict";
require("../core");
var core_1 = require("../core");
var article_detail_component_1 = require("./article-detail.component");
var article_header_component_1 = require("./article-header.component");
var article_list_component_1 = require("./article-list.component");
var article_list_item_component_1 = require("./article-list-item.component");
var article_action_creator_1 = require("./article.action-creator");
var reducers = require("./article.reducers");
var actions = require("./article.actions");
var app = angular.module("app.article", [
    "ngSanitize",
    "app.core",
    "app.category",
    "app.socialShare"
]);
core_1.provide(app, article_action_creator_1.ArticleActionCreator);
app.component(article_detail_component_1.ArticleDetailComponent);
app.component(article_header_component_1.ArticleHeaderComponent);
app.component(article_list_component_1.ArticleListComponent);
app.component(article_list_item_component_1.ArticleListItemComponent);
app.config(["reducersProvider", function (reducersProvider) {
        for (var reducer in reducers) {
            reducersProvider.configure(reducers[reducer]);
        }
    }]);
for (var action in actions) {
    core_1.provideAction(app, actions[action]);
}
//# sourceMappingURL=index.js.map