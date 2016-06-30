import { CanActivate, ChangeDetectionStrategy, Component } from "../core";

@Component({
    template: require("./river.component.html"),
    styles: [require("./river.component.scss")],
    selector: "river",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class RiverComponent {
    constructor() { }
}
