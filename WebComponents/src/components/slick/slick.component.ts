import { CanActivate, ChangeDetectionStrategy, Component } from "../core";

@Component({
    template: require("./slick.component.html"),
    styles: [require("./slick.component.scss")],
    selector: "slick",
    changeDetection: ChangeDetectionStrategy.OnPush,
    viewProviders:["$element"] 
})
export class SlickComponent {
    constructor(private $element: angular.IAugmentedJQuery) { }

    ngOnInit = () => {
        this.$element.slick({            
            infinite: false            
        });
    }
}
