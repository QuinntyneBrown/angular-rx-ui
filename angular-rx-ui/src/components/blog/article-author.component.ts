import { CanActivate, ChangeDetectionStrategy, Component } from "../core";

@Component({
    template: require("./article-author.component.html"),
    styles: [require("./article-author.component.scss")],
    selector: "article-author",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArticleAuthorComponent {
    constructor() { }
}
