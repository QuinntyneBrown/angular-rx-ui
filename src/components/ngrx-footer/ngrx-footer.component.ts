import { CanActivate, ChangeDetectionStrategy, Component } from "../core";

@Component({
    template: require("./ngrx-footer.component.html"),
    styles: [require("./ngrx-footer.component.scss")],
    selector: "ngrx-footer",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgrxFooterComponent {
    constructor() { }
}
