import { CanActivate, Component, ChangeDetectionStrategy } from "../core";
import { FlipCardActionCreator } from "./flip-card.action-creator";

@Component({
    template: require("./flip-card.component.html"),
    styleUrls: [require('./flip-card.component.scss')],
    transclude: {
        'front': '?flipCardFront',
        'back': '?flipCardBack'
    },
    selector: "flip-card",
    viewProviders: ["$attrs", "$element"],
    inputs: ['height?','width?','toggleAdded?','added?']
})
export class FlipCardComponent {
    constructor(private $attrs: angular.IAttributes, private $element: angular.IAugmentedJQuery) { }
  
    ngOnInit = () => {
        this.$element[0].style.height = this.height;
        this.$element[0].style.width = this.width;
        this.$element[0].addEventListener("ontouchstart", () => {
            this.$element[0].classList.toggle('hover');
        });        
    }

    ngOnChildInit = (options) => {
        var nativeElement = options.component.$element[0];
        nativeElement.style.height = this.height;
        nativeElement.style.width = this.width;
        this.viewChildren.push(nativeElement);
        options.component.added = this.added;
        options.component.toggleAdded = this.toggleAdded;
        this.components.push(options.component);

        if (this.viewChildren.length == 2) {
            this.viewChildren[0].style.backgroundColor = "#ECECEC";
            this.viewChildren[1].style.backgroundColor = "#B32E31";
        }
    }

    get height() { return (this.$attrs as any).height || "480px"; }
    get width() { return (this.$attrs as any).width || "320px"; }
    set height(value) { }
    set width(value) { }
    toggleAdded = (options) => {           
        this.added = !this.added;
        this.components[1].added = this.added;
    }
    added: boolean = false;
    viewChildren: Array<HTMLElement> = [];
    components = [];
}
