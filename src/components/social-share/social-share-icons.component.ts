import { CanActivate, ChangeDetectionStrategy, Component } from "../core";

@Component({
    template: require("./social-share-icons.component.html"),
    styles: [require("./social-share-icons.component.scss")],
    selector: "social-share-icons",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SocialShareIconsComponent { }
