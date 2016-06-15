import { CanActivate, ChangeDetectionStrategy, Component } from "../core";

@Component({
    template: require("./social-share-list.component.html"),
    styles: [require("./social-share-list.component.scss")],
    selector: "social-share-list",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SocialShareListComponent {
    constructor() { }
}
