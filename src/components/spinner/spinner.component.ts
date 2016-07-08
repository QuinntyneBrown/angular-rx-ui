import { CanActivate, ChangeDetectionStrategy, Component } from "../core";

@Component({
    template: require("./spinner.component.html"),
    styles: [require("./spinner.component.scss")],
    selector: "spinner",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpinnerComponent {
    constructor() { }
}
