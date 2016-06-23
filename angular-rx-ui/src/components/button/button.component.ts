import { CanActivate, ChangeDetectionStrategy, Component } from "../core";

@Component({
    template: require("./button.component.html"),
    styles: [require("./button.component.scss")],
    selector: "button",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent {
    constructor() { }
}
