import { CanActivate, ChangeDetectionStrategy, Component } from "../core";

@Component({
    template: require("./blog-list.component.html"),
    styles: [require("./blog-list.component.scss")],
    selector: "blog-list",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlogListComponent {
    constructor() { }
}
