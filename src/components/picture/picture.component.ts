import { CanActivate, ChangeDetectionStrategy, Component } from "../core";

@Component({
    template: require("./picture.component.html"),
    styles: [require("./picture.component.scss")],
    selector: "picture",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PictureComponent {
    constructor() { }
}
