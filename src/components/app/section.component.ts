import { CanActivate, ChangeDetectionStrategy, Component } from "../core";

@Component({
    template: require("./section.component.html"),
    styles: [require("./section.component.scss")],
    selector: "section",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SectionComponent {
    constructor() { }
}
