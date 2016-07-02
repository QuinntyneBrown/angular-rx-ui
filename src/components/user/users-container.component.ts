import { CanActivate, ChangeDetectionStrategy, Component, pluck } from "../core";
import * as actions from "./user.actions";
import { User } from "./user.model";

@Component({
    template: require("./users-container.component.html"),
    styles: [require("./users-container.component.scss")],
    selector: "users-container",
    viewProviders: ["$location","$routeParams","userActionCreator","invokeAsync"],
	changeDetection: ChangeDetectionStrategy.OnPush
})
@CanActivate(["$q", "$route", "invokeAsync", "userActionCreator", ($q: angular.IQService, $route: angular.route.IRouteService, invokeAsync, userActionCreator: actions.UserActionCreator) => {
    var userId = $route.current.params.userId;
    var promises = [invokeAsync(userActionCreator.all)];
    if (userId) { promises.push(invokeAsync({ action: userActionCreator.getById, params: { id: userId } })) };
    return $q.all(promises);
}])
export class UsersContainerComponent { 
    constructor(private $location: angular.ILocationService, private $routeParams: angular.route.IRouteParamsService, private userActionCreator: actions.UserActionCreator, private _invokeAsync) { }
    storeOnChange = state => {        
        this.entities = state.users;

		if (state.lastTriggeredByAction instanceof actions.SetCurrentUserAction && !state.lastTriggeredByAction.entity) 
            this.$location.path("/admin/users");

        if (state.lastTriggeredByAction instanceof actions.SetCurrentUserAction && state.lastTriggeredByAction.entity) 
            this.$location.path("/admin/user/edit/" + state.lastTriggeredByAction.entity.id);
        
		if (state.lastTriggeredByAction instanceof actions.AddOrUpdateUserAction)
            this.entity = new User();

        if (state.lastTriggeredByAction instanceof actions.RemoveUserAction && this.entity && this.entity.id) {
            this.entity = pluck({ value: Number(this.$routeParams["userId"]), items: this.entities }) as User;
            if (Object.keys(this.entity).length === 0) { this.$location.path("/admin/users"); }
        }
    }

    ngOnInit = () => {
        if (this.$routeParams["userId"]) {
            this.entity = pluck({ value: Number(this.$routeParams["userId"]), items: this.entities }) as User;
        } else {
            this.entity = new User();
        }
    }

    edit = entity => this.userActionCreator.edit(entity);
    remove = entity => this.userActionCreator.remove(entity);
    create = entity => this.userActionCreator.create();
    addOrUpdate = options => {
        this._invokeAsync({
            action: this.userActionCreator.addOrUpdate,
            params: { data: options.data }
        }).then(() => {
            if (this.$location.path() === "/admin/users") {
                this.entity = new User();
            } else {
                this.$location.path("/admin/users")
            }
        });        
    };
    entity: User;
    entities: Array<User>;
}
