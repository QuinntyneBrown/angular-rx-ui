import { IDispatcher, BaseActionCreator, Service } from "../core";
import { AuthorActionCreator } from "../author/author.action-creator";
import { ModalActionCreator } from "../modal/modal.action-creator";
import { AddOrUpdateArticleAction, AllArticlesAction,RemoveArticleAction,CurrentArticleRemovedAction, SetCurrentArticleAction, AddOrUpdateArticleSuccessAction } from "./article.actions";

@Service({
    serviceName: "articleActionCreator",
    viewProviders: ["$location", "dispatcher", "articleService", "guid", "authorActionCreator", "invokeAsync", "modalActionCreator"]
})
export class ArticleActionCreator extends BaseActionCreator {
    constructor($location: angular.ILocationService, dispatcher: IDispatcher, articleService, guid, private authorActionCreator: AuthorActionCreator, private invokeAsync, private modalActionCreator: ModalActionCreator) {
        super($location, articleService, dispatcher, guid, AddOrUpdateArticleAction, AllArticlesAction, RemoveArticleAction, SetCurrentArticleAction)
    }

    addOrUpdateSuccess = options => this.dispatcher.dispatch(new AddOrUpdateArticleSuccessAction(options.entity));

    currentArticleRemoved = () => this.dispatcher.dispatch(new CurrentArticleRemovedAction());

    openAuthorPickerModal = () => this.authorActionCreator.openAuthorPickerModal();

    openAllArticlesModal = () => {
        this.invokeAsync(this.all).then(results => {
            this.modalActionCreator.open({ html: "<all-articles-modal></all-articles-modal>" });
        });
    }
}



