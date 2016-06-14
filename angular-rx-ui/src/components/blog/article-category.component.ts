import { CanActivate, ChangeDetectionStrategy, Component } from "../core";

@Component({
    template: require("./article-category.component.html"),
    styles: [require("./article-category.component.scss")],
    selector: "article-category",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArticleCategoryComponent { }
