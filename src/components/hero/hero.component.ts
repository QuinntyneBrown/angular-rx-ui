import { ChangeDetectionStrategy, Component } from "../core";

@Component({
    template: require("./hero.component.html"),
    styles: [require("./hero.component.scss")],
    selector: "hero",
    inputs: ["@heroImageUrl","@height","@width"],
    transclude: true,
    viewProviders: ["$element","setElementBackgroundImage","setElementDimensions"],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroComponent {
    constructor(private $element: angular.IAugmentedJQuery, private setElementBackgroundImage, private setElementDimensions:any) { }
    ngOnInit = () => {
        this.setElementBackgroundImage(this.$element, this.heroImageUrl);
        this.setElementDimensions(this.$element, this.height, this.width);
    };    
    public heroImageUrl: string;
    public height: string;
    public width: string;
}
