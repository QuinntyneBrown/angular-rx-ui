import { CanActivate, ChangeDetectionStrategy, Component } from "../core";
import { SocialShareItem  } from "./social-share-item.model";

@Component({
    template: require("./social-share.component.html"),
    styles: [require("./social-share.component.scss")],
    selector: "social-share",
    inputs: ["socialShareItems"],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SocialShareComponent {}
