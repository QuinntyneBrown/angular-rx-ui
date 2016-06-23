import { CanActivate, ChangeDetectionStrategy, Component } from "../core";

@Component({
    template: require("./ngrx-header.component.html"),
    styles: [require("./ngrx-header.component.scss")],
    selector: "ngrx-header",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgrxHeaderComponent {
    constructor() { }
}
