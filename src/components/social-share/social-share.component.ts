import { CanActivate, ChangeDetectionStrategy, Component } from "../core";

@Component({
    template: require("./social-share.component.html"),
    styles: [require("./social-share.component.scss")],
    selector: "social-share",
    inputs:["socialShareItems"],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SocialShareComponent { }
