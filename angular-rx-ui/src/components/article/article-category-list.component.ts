import { CanActivate, ChangeDetectionStrategy, Component } from "../core";

@Component({
    template: require("./article-category-list.component.html"),
    styles: [require("./article-category-list.component.scss")],
    selector: "article-category-list",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArticleCategoryListComponent {
    constructor() { }
}
