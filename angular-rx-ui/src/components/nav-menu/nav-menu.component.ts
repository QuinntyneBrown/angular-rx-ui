import { CanActivate, ChangeDetectionStrategy, Component } from "../core";

@Component({
    template: require("./nav-menu.component.html"),
    styles: [require("./nav-menu.component.scss")],
    selector: "nav-menu",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavMenuComponent {
    constructor() { }
}
