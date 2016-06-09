import { Component } from "../core";
import {  CarouselPreviousAction, CarouselNextAction  } from "./carousel.actions";

@Component({
    template: require("./carousel.component.html"),
    styles: [require("./carousel.component.scss")],
    selector: "carousel",
    transclude: true,
    viewProviders: [
        "$attrs",
        "$compile",
        "$element",
        "$injector",
        "$scope",
        "$transclude",
        "getX",
        "translateX"
    ]
})
export class CarouselComponent {
    constructor(private $attrs: angular.IAttributes,
        private $compile: angular.ICompileService,
        private $element: angular.IAugmentedJQuery,
        private $injector: angular.auto.IInjectorService,
        private $scope: angular.IScope,
        private $transclude: Function,
        private getX,
        private translateX
    ) { }

    ngOnInit = () => {
        this.initialRender();
    }

    storeOnChange = state => {
        if (state.lastTriggeredByAction instanceof CarouselNextAction) {

        }

        if (state.lastTriggeredByAction instanceof CarouselPreviousAction) {

        }

    }

    render = () => {

    }

    reRender = () => {

    }

    initialRender = () => {
        var el = this.$element.find(".carousel-inner")[0];
        var fragment = document.createDocumentFragment();
        var nodes = [];
        for (var i = 0; i < this.items.length; i++) {
            var childScope = this.$scope.$new(true);
            childScope[this.itemName] = this.items[i];
            (childScope as any).$$index = i;
            var itemContent = this.$compile(angular.element(this.clone))(childScope);                      
            fragment.appendChild(itemContent[0]);            
        }
        this.$element.find(".carousel-inner")[0].appendChild(fragment);
    }

    renderNext = () => {

    }

    renderPrevious = () => {

    }

    content: HTMLElement;
    template: HTMLElement;
    clone: HTMLElement;
    items: Array<any> = [{ title: "The Wedding Crashers" }, { title: "Training Day" }];
    itemName: string = "movie";
    
}
