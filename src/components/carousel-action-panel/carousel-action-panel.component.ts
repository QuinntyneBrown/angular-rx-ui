import { CanActivate, ChangeDetectionStrategy, Component } from "../core";

@Component({
    template: require("./carousel-action-panel.component.html"),
    styles: [require("./carousel-action-panel.component.scss")],
    selector: "carousel-action-panel",
    changeDetection: ChangeDetectionStrategy.OnPush,
    inputs: [
        "imageUrl",
        "headline",
        "htmlBody",
        "actionButtonCaption",
        "onAction",
        "backgroundColor",
        "items"
    ]
})
export class CarouselActionPanelComponent {
    constructor() {}
}
