import { CanActivate, ChangeDetectionStrategy, Component } from "../core";
import * as actions from "./ui.actions";
import { pluck } from "../core/pluck";
import { Ui } from "./ui.model";

@Component({
    routes: ["/admin/uis","/admin/ui/edit/:uiId"],
    template: require("./uis-container.component.html"),
    styles: [require("./uis-container.component.css")],
    selector: "uis-container",
    viewProviders: ["$location","$routeParams","uiActionCreator","invokeAsync"],
	changeDetection: ChangeDetectionStrategy.OnPush
})
@CanActivate(["$q", "$route", "invokeAsync", "uiActionCreator", ($q: angular.IQService, $route: angular.route.IRouteService, invokeAsync, uiActionCreator: actions.UiActionCreator) => {
    var uiId = $route.current.params.uiId;
    var promises = [invokeAsync(uiActionCreator.all)];
    if (uiId) { promises.push(invokeAsync({ action: uiActionCreator.getById, params: { id: uiId } })) };
    return $q.all(promises);
}])
export class UisContainerComponent { 
    constructor(private $location: angular.ILocationService, private $routeParams: angular.route.IRouteParamsService, private uiActionCreator: actions.UiActionCreator, private _invokeAsync) { }
    storeOnChange = state => {        
        this.entities = state.uis;

		if (state.lastTriggeredByAction instanceof actions.SetCurrentUiAction && !state.lastTriggeredByAction.entity) 
            this.$location.path("/admin/uis");

        if (state.lastTriggeredByAction instanceof actions.SetCurrentUiAction && state.lastTriggeredByAction.entity) 
            this.$location.path("/admin/ui/edit/" + state.lastTriggeredByAction.entity.id);
        
		if (state.lastTriggeredByAction instanceof actions.AddOrUpdateUiAction)
            this.entity = new Ui();

        if (state.lastTriggeredByAction instanceof actions.RemoveUiAction && this.entity && this.entity.id) {
            this.entity = pluck({ value: Number(this.$routeParams["uiId"]), items: this.entities }) as Ui;
            if (Object.keys(this.entity).length === 0) { this.$location.path("/admin/uis"); }
        }
    }

    ngOnInit = () => {
        if (this.$routeParams["uiId"]) {
            this.entity = pluck({ value: Number(this.$routeParams["uiId"]), items: this.entities }) as Ui;
        } else {
            this.entity = new Ui();
        }
    }

    edit = entity => this.uiActionCreator.edit(entity);
    remove = entity => this.uiActionCreator.remove(entity);
    create = entity => this.uiActionCreator.create();
    addOrUpdate = options => {
        this._invokeAsync({
            action: this.uiActionCreator.addOrUpdate,
            params: { data: options.data }
        }).then(() => {
            if (this.$location.path() === "/admin/uis") {
                this.entity = new Ui();
            } else {
                this.$location.path("/admin/uis")
            }
        });        
    };
    entity: Ui;
    entities: Array<Ui>;
}
