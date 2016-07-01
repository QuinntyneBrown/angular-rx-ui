import { CanActivate, ChangeDetectionStrategy, Component } from "../core";

@Component({
    template: require("./ui.component.html"),
    styles: [require("./ui.component.scss")],
    selector: "ui",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class UiComponent {
    constructor() { }
}
