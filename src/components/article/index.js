"use strict";
require("../core");
require("../author");
require("../category");
require("../social-share");
require("../tabs");
require("../tag");
var core_1 = require("../core");
var article_detail_component_1 = require("./article-detail.component");
var article_header_component_1 = require("./article-header.component");
var article_list_component_1 = require("./article-list.component");
var article_list_item_component_1 = require("./article-list-item.component");
var article_editor_container_component_1 = require("./article-editor-container.component");
var article_editor_component_1 = require("./article-editor.component");
var article_action_creator_1 = require("./article.action-creator");
var reducers = require("./article.reducers");
var actions = require("./article.actions");
var app = angular.module("app.article", [
    "ngSanitize",
    "app.core",
    "app.author",
    "app.category",
    "app.socialShare",
    "app.tabs",
    "app.tag"
]);
core_1.provide(app, article_action_creator_1.ArticleActionCreator);
app.component(article_detail_component_1.ArticleDetailComponent);
app.component(article_header_component_1.ArticleHeaderComponent);
app.component(article_list_component_1.ArticleListComponent);
app.component(article_list_item_component_1.ArticleListItemComponent);
app.component(article_editor_component_1.ArticleEditorComponent);
app.component(article_editor_container_component_1.ArticleEditorContainerComponent);
app.config(["reducersProvider", function (reducersProvider) {
        for (var reducer in reducers) {
            reducersProvider.configure(reducers[reducer]);
        }
    }]);
for (var action in actions) {
    core_1.provideAction(app, actions[action]);
}
//# sourceMappingURL=index.js.map