import { ChangeDetectionStrategy, Component } from "../core";

@Component({
    template: require("./hero.component.html"),
    styles: [require("./hero.component.scss")],
    selector: "hero",
    inputs: ["@heroImageUrl","@height","@width"],
    transclude: true,
    viewProviders: ["$element"],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroComponent {
    constructor(private $element: angular.IAugmentedJQuery) { }
    ngOnInit = () => {
        this.$element[0].style.backgroundImage = `url('${this.heroImageUrl}')`;
        this.$element[0].style.height = `${this.height}px`;

        if (this.height && this.height.indexOf("%") > -1)
            this.$element[0].style.height = `${this.height}`;

        if (this.height && this.height.indexOf("%") < 0)
            this.$element[0].style.height = `${this.height}px`;

        if (this.width && this.width.indexOf("%") > -1)
            this.$element[0].style.width = `${this.width}`;

        if (this.width && this.width.indexOf("%") < 0)
            this.$element[0].style.width = `${this.width}px`;
    };
    
    public heroImageUrl: string;
    public height: string;
    public width: string;
}
