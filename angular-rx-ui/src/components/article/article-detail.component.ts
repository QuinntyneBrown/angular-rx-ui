import { CanActivate, ChangeDetectionStrategy, Component } from "../core";

@Component({
    componentName:"articleDetailComponent",
    template: require("./article-detail.component.html"),
    styles: [require("./article-detail.component.scss")],
    selector: "article-detail",
    changeDetection: ChangeDetectionStrategy.OnPush,
    inputs: [ "article"]
})
export class ArticleDetailComponent {}
