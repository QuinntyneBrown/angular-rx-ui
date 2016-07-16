import { CanActivate, ChangeDetectionStrategy, Component } from "../core";

@Component({
    template: require("./button.component.html"),
    styles: [require("./button.component.scss")],
    selector: "calypso-button",
    inputs: ['@caption', '&onClick'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent { }
