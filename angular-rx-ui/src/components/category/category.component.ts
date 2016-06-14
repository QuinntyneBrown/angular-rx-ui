import { CanActivate, ChangeDetectionStrategy, Component } from "../core";

@Component({
    template: require("./category.component.html"),
    styles: [require("./category.component.scss")],
    selector: "category",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoryComponent {
    constructor() { }
}
