import { CanActivate, ChangeDetectionStrategy, Component } from "../core";

@Component({
    template: require("./bold-button.component.html"),
    styles: [require("./bold-button.component.scss")],
    selector: "bold-button",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BoldButtonComponent {
    constructor() { }
}
