import { CanActivate, ChangeDetectionStrategy, Component } from "../core";

@Component({
    template: require("./ads.component.html"),
    styles: [require("./ads.component.scss")],
    selector: "ads",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdsComponent {
    constructor() { }
}
