"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("../core");
var actions = require("./article.actions");
var article_action_creator_1 = require("./article.action-creator");
var pluck_1 = require("../core/pluck");
var article_model_1 = require("./article.model");
var author_actions_1 = require("../author/author.actions");
var ArticleEditorContainerComponent = (function () {
    function ArticleEditorContainerComponent($location, $routeParams, articleActionCreator) {
        var _this = this;
        this.$location = $location;
        this.$routeParams = $routeParams;
        this.articleActionCreator = articleActionCreator;
        this.storeOnChange = function (state) {
            _this.entities = state.articles;
            if (state.lastTriggeredByAction instanceof actions.SetCurrentArticleAction && !state.lastTriggeredByAction.entity)
                _this.$location.path("/admin/articles");
            if (state.lastTriggeredByAction instanceof actions.SetCurrentArticleAction && state.lastTriggeredByAction.entity)
                _this.$location.path("/admin/article/edit/" + state.lastTriggeredByAction.entity.id);
            if (state.lastTriggeredByAction instanceof actions.RemoveArticleAction && _this.entity && _this.entity.id) {
                _this.entity = pluck_1.pluck({ value: Number(_this.$routeParams["articleId"]), items: _this.entities });
                if (Object.keys(_this.entity).length === 0) {
                    _this.$location.path("/admin/articles");
                }
            }
            if (state.lastTriggeredByAction instanceof actions.RemoveArticleAction && _this.entity && _this.entity.id) {
                _this.entity = pluck_1.pluck({ value: Number(_this.$routeParams["articleId"]), items: _this.entities });
                if (Object.keys(_this.entity).length === 0) {
                    _this.$location.path("/admin/articles");
                }
            }
            if (state.lastTriggeredByAction instanceof actions.AddOrUpdateArticleAction && state.lastTriggeredByAction.entity)
                _this.$location.path("/admin/article/edit/" + state.lastTriggeredByAction.entity.id);
            if (state.lastTriggeredByAction instanceof author_actions_1.SelectAuthorAction) {
                _this.entity.author = state.lastTriggeredByAction.entity;
            }
        };
        this.ngOnInit = function () {
            if (_this.$routeParams["articleId"]) {
                _this.entity = pluck_1.pluck({ value: Number(_this.$routeParams["articleId"]), items: _this.entities });
            }
            else {
                _this.entity = new article_model_1.Article();
            }
        };
        this.allArticles = function () { return _this.articleActionCreator.openAllArticlesModal(); };
        this.edit = function (entity) { return _this.articleActionCreator.edit(entity); };
        this.remove = function (entity) { return _this.articleActionCreator.remove(entity); };
        this.create = function (entity) { return _this.articleActionCreator.create(); };
        this.addOrUpdate = function (options) { return _this.articleActionCreator.addOrUpdate({ data: options.data }); };
        this.selectAuthor = function () { return _this.articleActionCreator.openAuthorPickerModal(); };
    }
    ArticleEditorContainerComponent = __decorate([
        core_1.Component({
            template: require("./article-editor-container.component.html"),
            styles: [require("./article-editor-container.component.scss")],
            selector: "article-editor-container",
            viewProviders: ["$location", "$routeParams", "articleActionCreator"],
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }),
        core_1.CanActivate(["$q", "$route", "invokeAsync", "articleActionCreator", function ($q, $route, invokeAsync, articleActionCreator) {
                var articleId = $route.current.params.articleId;
                var promises = [invokeAsync(articleActionCreator.all)];
                if (articleId) {
                    promises.push(invokeAsync({ action: articleActionCreator.getById, params: { id: articleId } }));
                }
                ;
                return $q.all(promises);
            }]), 
        __metadata('design:paramtypes', [Object, Object, article_action_creator_1.ArticleActionCreator])
    ], ArticleEditorContainerComponent);
    return ArticleEditorContainerComponent;
}());
exports.ArticleEditorContainerComponent = ArticleEditorContainerComponent;
//# sourceMappingURL=article-editor-container.component.js.map