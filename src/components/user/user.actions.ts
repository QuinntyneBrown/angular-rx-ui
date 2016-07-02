import { IDispatcher, Service } from "../core";
import { BaseActionCreator } from "../core/action-creator";

@Service({
    serviceName: "userActionCreator",
    viewProviders: ["$location", "dispatcher", "userService", "guid"]
})
export class UserActionCreator extends BaseActionCreator {
    constructor($location: angular.ILocationService, dispatcher: IDispatcher, userService, guid) {
        super($location, userService, dispatcher, guid, AddOrUpdateUserAction, AllUsersAction, RemoveUserAction, SetCurrentUserAction)
    }

    addOrUpdateSuccess = options => this.dispatcher.dispatch(new AddOrUpdateUserSuccessAction(options.entity));

    currentUserRemoved = () => this.dispatcher.dispatch(new CurrentUserRemovedAction());

    public current = options => {
        var id = this.guid()
        this.service.current()
            .then((results: any) => {
                this.dispatcher.dispatch(new CurrentUserAction(id, results));
            });
        return id;
    }

}


export class AddOrUpdateUserAction { constructor(public id, public entity) { } }

export class AllUsersAction { constructor(public id, public entities) { } }

export class RemoveUserAction { constructor(public id, public entity) { } }

export class UsersFilterAction { constructor(public id, public term) { } }

export class SetCurrentUserAction { constructor(public entity) { } }

export class AddOrUpdateUserSuccessAction { constructor(public entity) { } }

export class CurrentUserRemovedAction { constructor() { } }

export class CurrentUserAction { constructor(public id, public entity) { } }
