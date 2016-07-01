import { ChangeDetectionStrategy, Component } from "../core";

@Component({
    template: require("./hero.component.html"),
    styles: [require("./hero.component.scss")],
    selector: "hero",
    inputs: ["@heroImageUrl","@height","@width"],
    transclude: true,
    viewProviders: ["$element","setElementDimensions"],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroComponent {
    constructor(private $element: angular.IAugmentedJQuery, private setElementDimensions:any) { }
    ngOnInit = () => {
        this.$element[0].style.backgroundImage = `url('${this.heroImageUrl}')`;
        this.setElementDimensions(this.$element, this.height, this.width);
    };    
    public heroImageUrl: string;
    public height: string;
    public width: string;
}
