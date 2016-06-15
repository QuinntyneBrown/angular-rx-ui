import { CanActivate, ChangeDetectionStrategy, Component } from "../core";

@Component({
    template: require("./article-header.component.html"),
    styles: [require("./article-header.component.scss")],
    selector: "article-header",
    changeDetection: ChangeDetectionStrategy.OnPush,
    inputs: [
        "articleTitle",
        "articleHref",
        "articlePublishedDate"
    ]
})
export class ArticleHeaderComponent { }
