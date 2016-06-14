import { CanActivate, ChangeDetectionStrategy, Component } from "../core";

@Component({
    template: require("./article-social-share.component.html"),
    styles: [require("./article-social-share.component.scss")],
    selector: "article-social-share",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArticleSocialShareComponent {
    constructor() { }
}
