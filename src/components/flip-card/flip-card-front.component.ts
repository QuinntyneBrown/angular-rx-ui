import { CanActivate, Component, ChangeDetectionStrategy } from "../core";
import { FlipCardActionCreator } from "./flip-card.action-creator";
import { FlipCardComponent } from "./flip-card.component";

@Component({
    template: require("./flip-card-front.component.html"),
    selector: "flip-card-front",
    transclude: true,
    require: '^flipCard',
    viewProviders: ["$element"]
})
export class FlipCardFrontComponent {
    constructor(public $element: angular.IAugmentedJQuery) { }
    ngOnInit = () => { this.flipCard.ngOnChildInit({ component: this }); }
    flipCard: FlipCardComponent;

}