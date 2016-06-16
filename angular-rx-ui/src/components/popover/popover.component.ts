import { CanActivate, ChangeDetectionStrategy, Component } from "../core";

@Component({
    template: require("./popover.component.html"),
    styles: [require("./popover.component.scss")],
    selector: "popover",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PopoverComponent {
    constructor() { }
}
