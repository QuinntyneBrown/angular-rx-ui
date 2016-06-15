import { CanActivate, ChangeDetectionStrategy, Component } from "../core";

@Component({
    template: require("./category-list-for-item.component.html"),
    styles: [require("./category-list-for-item.component.scss")],
    selector: "category-list-for-item",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoryListForItemComponent { }
