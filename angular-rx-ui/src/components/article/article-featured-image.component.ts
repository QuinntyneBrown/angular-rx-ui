import { CanActivate, ChangeDetectionStrategy, Component } from "../core";

@Component({
    template: require("./article-featured-image.component.html"),
    styles: [require("./article-featured-image.component.scss")],
    selector: "article-featured-image",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArticleFeaturedImageComponent {
    constructor() { }
}
