import { CanActivate, ChangeDetectionStrategy, Component } from "../core";

@Component({
    template: require("./category-list.component.html"),
    styles: [require("./category-list.component.scss")],
    selector: "category-list",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoryListComponent { }
