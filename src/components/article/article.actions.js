"use strict";
var AddOrUpdateArticleAction = (function () {
    function AddOrUpdateArticleAction(id, entity) {
        this.id = id;
        this.entity = entity;
    }
    return AddOrUpdateArticleAction;
}());
exports.AddOrUpdateArticleAction = AddOrUpdateArticleAction;
var AllArticlesAction = (function () {
    function AllArticlesAction(id, entities) {
        this.id = id;
        this.entities = entities;
    }
    return AllArticlesAction;
}());
exports.AllArticlesAction = AllArticlesAction;
var RemoveArticleAction = (function () {
    function RemoveArticleAction(id, entity) {
        this.id = id;
        this.entity = entity;
    }
    return RemoveArticleAction;
}());
exports.RemoveArticleAction = RemoveArticleAction;
var ArticlesFilterAction = (function () {
    function ArticlesFilterAction(id, term) {
        this.id = id;
        this.term = term;
    }
    return ArticlesFilterAction;
}());
exports.ArticlesFilterAction = ArticlesFilterAction;
var SetCurrentArticleAction = (function () {
    function SetCurrentArticleAction(entity) {
        this.entity = entity;
    }
    return SetCurrentArticleAction;
}());
exports.SetCurrentArticleAction = SetCurrentArticleAction;
var AddOrUpdateArticleSuccessAction = (function () {
    function AddOrUpdateArticleSuccessAction(entity) {
        this.entity = entity;
    }
    return AddOrUpdateArticleSuccessAction;
}());
exports.AddOrUpdateArticleSuccessAction = AddOrUpdateArticleSuccessAction;
var CurrentArticleRemovedAction = (function () {
    function CurrentArticleRemovedAction() {
    }
    return CurrentArticleRemovedAction;
}());
exports.CurrentArticleRemovedAction = CurrentArticleRemovedAction;
//# sourceMappingURL=article.actions.js.map