import { CanActivate, ChangeDetectionStrategy, Component } from "../core";

@Component({
    template: require("./featured-trio.component.html"),
    styles: [require("./featured-trio.component.scss")],
    selector: "featured-trio",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeaturedTrioComponent {
    constructor() { }
}
