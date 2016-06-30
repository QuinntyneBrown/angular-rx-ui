import { ChangeDetectionStrategy, Component } from "../core";

@Component({
    template: require("./hero.component.html"),
    styles: [require("./hero.component.scss")],
    selector: "hero",
    inputs: ["@heroImageUrl"],
    transclude: true,
    viewProviders: ["$element"],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroComponent {
    constructor(private $element: angular.IAugmentedJQuery) { }
    ngOnInit = () => this.$element[0].style.backgroundImage = `url('${this.heroImageUrl}')`;
    public heroImageUrl: string;
}
