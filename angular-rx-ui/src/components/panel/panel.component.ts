import { CanActivate, ChangeDetectionStrategy, Component } from "../core";

@Component({
    template: require("./panel.component.html"),
    styles: [require("./panel.component.scss")],
    selector: "panel",
    changeDetection: ChangeDetectionStrategy.OnPush,
    inputs:["imageUrl","headline","htmlBody"]
})
export class PanelComponent { }
