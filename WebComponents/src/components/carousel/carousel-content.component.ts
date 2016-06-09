import { CanActivate, ChangeDetectionStrategy, Component } from "../core";

@Component({
    template: require("./carousel-content.component.html"),
    styles: [require("./carousel-content.component.scss")],
    selector: "carousel-content",
    transclude: true,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CarouselContentComponent {
    constructor() { }
}
