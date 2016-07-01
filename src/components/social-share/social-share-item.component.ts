import { ChangeDetectionStrategy, Component } from "../core";

@Component({
    template: require("./social-share-item.component.html"),
    styles: [require("./social-share-item.component.scss")],
    selector: "social-share-item",
    inputs: ["@src", "@label","@url", "@srcHover"],
    viewProviders: ["$element","$window","setElementBackgroundImage"],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SocialShareItemComponent {
    constructor(private $element: angular.IAugmentedJQuery, private $window: angular.IWindowService, private setElementBackgroundImage) { }
    ngOnInit = () => this.setElementBackgroundImage(this.$socialShareIconAugmentedJQuery, this.src);    
    public onClick = () => this.$window.open(this.url, "_blank");
    public onMouseover = () => this.setElementBackgroundImage(this.$socialShareIconAugmentedJQuery, this.srcHover);
    public onMouseleave = () => this.setElementBackgroundImage(this.$socialShareIconAugmentedJQuery, this.src);
    public get $socialShareIconAugmentedJQuery() { return this.$element.find(".social-share-item-icon"); } 
    public url: string;
    public src: string;
    public srcHover: string;
    public label: string;
}
