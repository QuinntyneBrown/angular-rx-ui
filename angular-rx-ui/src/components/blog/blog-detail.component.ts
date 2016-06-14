import { CanActivate, ChangeDetectionStrategy, Component } from "../core";

@Component({
    template: require("./blog-detail.component.html"),
    styles: [require("./blog-detail.component.scss")],
    selector: "blog-detail",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlogDetailComponent {
    constructor() { }
}
