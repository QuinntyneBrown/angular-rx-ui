import { CanActivate, ChangeDetectionStrategy, Component } from "../core";
import * as actions from "./category.actions";
import { pluck } from "../core/pluck";
import { Category } from "./category.model";

@Component({
    routes: ["/admin/{{ entityNameLowerCase }}s","/admin/{{ entityNameLowerCase }}/edit/:categoryId"],
    template: require("./categorys-container.component.html"),
    styles: [require("./categorys-container.component.css")],
    selector: "categorys-container",
    viewProviders: ["$location","$routeParams","categoryActionCreator","invokeAsync"],
	changeDetection: ChangeDetectionStrategy.OnPush
})
@CanActivate(["$q", "$route", "invokeAsync", "categoryActionCreator", ($q: angular.IQService, $route: angular.route.IRouteService, invokeAsync, categoryActionCreator: actions.CategoryActionCreator) => {
    var categoryId = $route.current.params.categoryId;
    var promises = [invokeAsync(categoryActionCreator.all)];
    if (categoryId) { promises.push(invokeAsync({ action: categoryActionCreator.getById, params: { id: categoryId } })) };
    return $q.all(promises);
}])
export class CategorysContainerComponent { 
    constructor(private $location: angular.ILocationService, private $routeParams: angular.route.IRouteParamsService, private categoryActionCreator: actions.CategoryActionCreator, private _invokeAsync) { }
    storeOnChange = state => {        
        this.entities = state.categorys;

		if (state.lastTriggeredByAction instanceof actions.SetCurrentCategoryAction && !state.lastTriggeredByAction.entity) 
            this.$location.path("/admin/{{ entityNameLowerCase }}s");

        if (state.lastTriggeredByAction instanceof actions.SetCurrentCategoryAction && state.lastTriggeredByAction.entity) 
            this.$location.path("/admin/{{ entityNameLowerCase }}/edit/" + state.lastTriggeredByAction.entity.id);
        
		if (state.lastTriggeredByAction instanceof actions.AddOrUpdateCategoryAction)
            this.entity = new Category();

        if (state.lastTriggeredByAction instanceof actions.RemoveCategoryAction && this.entity && this.entity.id) {
            this.entity = pluck({ value: Number(this.$routeParams["categoryId"]), items: this.entities }) as Category;
            if (Object.keys(this.entity).length === 0) { this.$location.path("/admin/{{ entityNameLowerCase }}s"); }
        }
    }

    ngOnInit = () => {
        if (this.$routeParams["categoryId"]) {
            this.entity = pluck({ value: Number(this.$routeParams["categoryId"]), items: this.entities }) as Category;
        } else {
            this.entity = new Category();
        }
    }

    edit = entity => this.categoryActionCreator.edit(entity);
    remove = entity => this.categoryActionCreator.remove(entity);
    create = entity => this.categoryActionCreator.create();
    addOrUpdate = options => {
        this._invokeAsync({
            action: this.categoryActionCreator.addOrUpdate,
            params: { data: options.data }
        }).then(() => {
            if (this.$location.path() === "/admin/{{ entityNameLowerCase }}s") {
                this.entity = new Category();
            } else {
                this.$location.path("/admin/{{ entityNameLowerCase }}s")
            }
        });        
    };
    entity: Category;
    entities: Array<Category>;
}
