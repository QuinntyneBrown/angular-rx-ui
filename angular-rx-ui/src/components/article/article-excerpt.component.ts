import { CanActivate, ChangeDetectionStrategy, Component } from "../core";

@Component({
    template: require("./article-excerpt.component.html"),
    styles: [require("./article-excerpt.component.scss")],
    selector: "article-excerpt",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArticleExcerptComponent {
    constructor() { }
}
