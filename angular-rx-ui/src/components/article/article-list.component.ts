import { CanActivate, ChangeDetectionStrategy, Component } from "../core";

@Component({
    componentName: "articleListComponent",
    template: require("./article-list.component.html"),
    styles: [require("./article-list.component.scss")],
    selector: "article-list",
    changeDetection: ChangeDetectionStrategy.OnPush,
    inputs: [
        "articles"
    ]
})
export class ArticleListComponent {}
