import { ChangeDetectionStrategy, Component } from "../core";

@Component({
    template: require("./hero.component.html"),
    styles: [require("./hero.component.scss")],
    selector: "hero",
    inputs: ["@heroImageUrl","@height","@width"],
    transclude: true,
    viewProviders: ["$element","setElementDimension"],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroComponent {
    constructor(private $element: angular.IAugmentedJQuery, private setElementDimension:any) { }
    ngOnInit = () => {
        this.$element[0].style.backgroundImage = `url('${this.heroImageUrl}')`;
        this.setElementDimension("height", this.$element, this.height);
        this.setElementDimension("width", this.$element, this.width);
    };    
    public heroImageUrl: string;
    public height: string;
    public width: string;
}
