import { CanActivate, ChangeDetectionStrategy, Component } from "../core";

@Component({
    template: require("./property.component.html"),
    styles: [require("./property.component.scss")],
    selector: "property",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PropertyComponent {
    constructor() { }
}
