import { CanActivate, ChangeDetectionStrategy, Component } from "../core";

@Component({
    template: require("./blog-list-item.component.html"),
    styles: [require("./blog-list-item.component.scss")],
    selector: "blog-list-item",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlogListItemComponent {
    constructor() { }
}
