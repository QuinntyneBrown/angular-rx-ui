import { CanActivate, ChangeDetectionStrategy, Component } from "../core";
import * as actions from "./article.actions";
import { ArticleActionCreator } from "./article.action-creator";
import { pluck } from "../core/pluck";
import { Article } from "./article.model";
import { AddOrUpdateAuthorAction, SelectAuthorAction } from "../author/author.actions";

@Component({
    template: require("./article-editor-container.component.html"),
    styles: [require("./article-editor-container.component.scss")],
    selector: "article-editor-container",
    viewProviders: ["$location", "$routeParams", "articleActionCreator"],
    changeDetection: ChangeDetectionStrategy.OnPush
})
@CanActivate(["$q", "$route", "invokeAsync", "articleActionCreator", ($q: angular.IQService, $route: angular.route.IRouteService, invokeAsync, articleActionCreator: ArticleActionCreator) => {
    var articleId = $route.current.params.articleId;
    var promises = [invokeAsync(articleActionCreator.all)];
    if (articleId) { promises.push(invokeAsync({ action: articleActionCreator.getById, params: { id: articleId } })) };
    return $q.all(promises);
}])
export class ArticleEditorContainerComponent {
    constructor(private $location: angular.ILocationService, private $routeParams: angular.route.IRouteParamsService, private articleActionCreator: ArticleActionCreator) { }
    storeOnChange = state => {
        this.entities = state.articles;

        if (state.lastTriggeredByAction instanceof actions.SetCurrentArticleAction && !state.lastTriggeredByAction.entity)
            this.$location.path("/admin/articles");

        if (state.lastTriggeredByAction instanceof actions.SetCurrentArticleAction && state.lastTriggeredByAction.entity)
            this.$location.path("/admin/article/edit/" + state.lastTriggeredByAction.entity.id);

        if (state.lastTriggeredByAction instanceof actions.RemoveArticleAction && this.entity && this.entity.id) {
            this.entity = pluck({ value: Number(this.$routeParams["articleId"]), items: this.entities }) as Article;
            if (Object.keys(this.entity).length === 0) { this.$location.path("/admin/articles"); }
        }

        if (state.lastTriggeredByAction instanceof actions.RemoveArticleAction && this.entity && this.entity.id) {
            this.entity = pluck({ value: Number(this.$routeParams["articleId"]), items: this.entities }) as Article;
            if (Object.keys(this.entity).length === 0) { this.$location.path("/admin/articles"); }
        }

        if (state.lastTriggeredByAction instanceof actions.AddOrUpdateArticleAction && state.lastTriggeredByAction.entity)
            this.$location.path("/admin/article/edit/" + state.lastTriggeredByAction.entity.id);

        if (state.lastTriggeredByAction instanceof SelectAuthorAction) {
            this.entity.author = state.lastTriggeredByAction.entity;
        }
    }

    ngOnInit = () => {
        if (this.$routeParams["articleId"]) {
            this.entity = pluck({ value: Number(this.$routeParams["articleId"]), items: this.entities }) as Article;
        } else {
            this.entity = new Article();
        }
    }

    allArticles = () => this.articleActionCreator.openAllArticlesModal();

    edit = entity => this.articleActionCreator.edit(entity);
    remove = entity => this.articleActionCreator.remove(entity);
    create = entity => this.articleActionCreator.create();
    addOrUpdate = options => this.articleActionCreator.addOrUpdate({ data: options.data });
    selectAuthor = () => this.articleActionCreator.openAuthorPickerModal();
    entity: Article;
    entities: Array<Article>;
}
