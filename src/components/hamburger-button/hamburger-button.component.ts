import { CanActivate, ChangeDetectionStrategy, Component } from "../core";

@Component({
    template: require("./hamburger-button.component.html"),
    styles: [require("./hamburger-button.component.scss")],
    selector: "hamburger-button",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HamburgerButtonComponent {
    constructor() { }
}
