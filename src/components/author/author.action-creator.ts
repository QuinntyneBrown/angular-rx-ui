import { IDispatcher, Service, BaseActionCreator } from "../core";
import { ModalActionCreator } from "../modal/modal.action-creator";
import { AddOrUpdateAuthorAction, AddOrUpdateAuthorSuccessAction, AllAuthorsAction, AuthorsFilterAction, CurrentAuthorRemovedAction, RemoveAuthorAction, SelectAuthorAction, SetCurrentAuthorAction } from "./author.actions";

@Service({
    serviceName: "authorActionCreator",
    viewProviders: ["$location", "dispatcher", "authorService", "guid", "invokeAsync", "modalActionCreator"]
})
export class AuthorActionCreator extends BaseActionCreator {
    constructor($location: angular.ILocationService, dispatcher: IDispatcher, authorService, guid, private invokeAsync, private modalActionCreator: ModalActionCreator) {
        super($location, authorService, dispatcher, guid, AddOrUpdateAuthorAction, AllAuthorsAction, RemoveAuthorAction, SetCurrentAuthorAction)
    }

    addOrUpdateSuccess = options => this.dispatcher.dispatch(new AddOrUpdateAuthorSuccessAction(options.entity));

    currentAuthorRemoved = () => this.dispatcher.dispatch(new CurrentAuthorRemovedAction());

    openAuthorPickerModal = () => {
        this.invokeAsync(this.all)
            .then(() => this.modalActionCreator.open({ html: "<author-picker-modal></author-picker-modal>" }));
    }

    closeModal = () => this.modalActionCreator.close();

    select = (entity) => this.dispatcher.dispatch(new SelectAuthorAction(entity));
}