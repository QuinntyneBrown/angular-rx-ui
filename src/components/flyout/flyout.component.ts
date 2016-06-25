import { CanActivate, ChangeDetectionStrategy, Component } from "../core";

@Component({
    template: require("./flyout.component.html"),
    styles: [require("./flyout.component.scss")],
    selector: "flyout",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FlyoutComponent {
    constructor() { }
}
