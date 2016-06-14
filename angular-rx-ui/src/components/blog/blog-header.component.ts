import { CanActivate, ChangeDetectionStrategy, Component } from "../core";

@Component({
    template: require("./blog-header.component.html"),
    styles: [require("./blog-header.component.scss")],
    selector: "blog-header",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlogHeaderComponent {
    constructor() { }
}
