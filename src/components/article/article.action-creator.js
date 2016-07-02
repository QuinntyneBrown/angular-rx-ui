"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var author_action_creator_1 = require("../author/author.action-creator");
var modal_action_creator_1 = require("../modal/modal.action-creator");
var article_actions_1 = require("./article.actions");
var ArticleActionCreator = (function (_super) {
    __extends(ArticleActionCreator, _super);
    function ArticleActionCreator($location, dispatcher, articleService, guid, authorActionCreator, invokeAsync, modalActionCreator) {
        var _this = this;
        _super.call(this, $location, articleService, dispatcher, guid, article_actions_1.AddOrUpdateArticleAction, article_actions_1.AllArticlesAction, article_actions_1.RemoveArticleAction, article_actions_1.SetCurrentArticleAction);
        this.authorActionCreator = authorActionCreator;
        this.invokeAsync = invokeAsync;
        this.modalActionCreator = modalActionCreator;
        this.addOrUpdateSuccess = function (options) { return _this.dispatcher.dispatch(new article_actions_1.AddOrUpdateArticleSuccessAction(options.entity)); };
        this.currentArticleRemoved = function () { return _this.dispatcher.dispatch(new article_actions_1.CurrentArticleRemovedAction()); };
        this.openAuthorPickerModal = function () { return _this.authorActionCreator.openAuthorPickerModal(); };
        this.openAllArticlesModal = function () {
            _this.invokeAsync(_this.all).then(function (results) {
                _this.modalActionCreator.open({ html: "<all-articles-modal></all-articles-modal>" });
            });
        };
    }
    ArticleActionCreator = __decorate([
        core_1.Service({
            serviceName: "articleActionCreator",
            viewProviders: ["$location", "dispatcher", "articleService", "guid", "authorActionCreator", "invokeAsync", "modalActionCreator"]
        }), 
        __metadata('design:paramtypes', [Object, Object, Object, Object, author_action_creator_1.AuthorActionCreator, Object, modal_action_creator_1.ModalActionCreator])
    ], ArticleActionCreator);
    return ArticleActionCreator;
}(core_1.BaseActionCreator));
exports.ArticleActionCreator = ArticleActionCreator;
//# sourceMappingURL=article.action-creator.js.map