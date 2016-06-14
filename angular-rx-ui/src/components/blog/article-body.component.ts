import { CanActivate, ChangeDetectionStrategy, Component } from "../core";

@Component({
    template: require("./article-body.component.html"),
    styles: [require("./article-body.component.scss")],
    selector: "article-body",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArticleBodyComponent {
    constructor() { }
}
