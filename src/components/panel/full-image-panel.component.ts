import { CanActivate, ChangeDetectionStrategy, Component } from "../core";

@Component({
    template: require("./full-image-panel.component.html"),
    styles: [require("./full-image-panel.component.scss")],
    selector: "full-image-panel",
    inputs: ["@imageUrl"],
    transclude:true,
    viewProviders:["$element"],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FullImagePanelComponent {
    constructor(private $element: angular.IAugmentedJQuery) { }
    ngOnInit = () => this.$element[0].style.backgroundImage = `url('${this.imageUrl}')`;    
    public imageUrl: string;
}
