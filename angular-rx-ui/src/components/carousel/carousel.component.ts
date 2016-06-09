import { Component } from "../core";
import { CarouselPreviousAction, CarouselNextAction  } from "./carousel.actions";

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

    ngOnInit = () => this.initialRender();

    storeOnChange = state => {
        if (state.lastTriggeredByAction instanceof CarouselNextAction) {

        }

        if (state.lastTriggeredByAction instanceof CarouselPreviousAction) {

        }
    }

    render = () => {
        if (!this.hasRendered) this.initialRender();
    }

    reRender = () => {
        this.translateX(this.carouselInner, 0);
        if (!this.$scope.$$phase)
            this.$scope.$digest();
    }

    initialRender = () => {
        let fragment = document.createDocumentFragment();
        let nodes = [];
        for (var i = 0; i < this.items.length; i++) {
            var childScope = this.$scope.$new(true);
            childScope[this.itemName] = this.items[i];
            (childScope as any).$$index = i;
            var itemContent = this.$compile(angular.element(this.clone))(childScope);                      
            fragment.appendChild(itemContent[0]);            
        }
        this.carouselInner.appendChild(fragment);
        this.hasRendered = true;
        this.currentIndex = 0;
    }

    getAllRenderedNodes = (options):Array<any> => {
        return [];
    }

    transitonEnd: string;
    lastViewPortWidth: number;
    get itemsCount() {
        return this.items.length;
    }

    renderNext = () => {
        if (!this.inTransition) {
            this.inTransition = true;
            let renderedNodes = this.getAllRenderedNodes({ orientation: "horizontal", order: "desc" });
            let numOfTransitions = renderedNodes.length;

            for (var i = 0; i < renderedNodes.length; i++) {
                var node = renderedNodes[i].node;
                this.translateX(renderedNodes[i].node, this.getX(renderedNodes[i].node) - this.lastViewPortWidth);

                renderedNodes[i].node.addEventListener(this.transitonEnd, () => {
                    numOfTransitions = numOfTransitions - 1;

                    if (numOfTransitions === 0) {
                        this.turnOffTransitions();

                        let renderedNodes = this.getAllRenderedNodes({ orientation: "horizontal", order: "asc" });
                        let node = renderedNodes[0].node;
                        let currentLeft = node.offsetLeft;
                        let desiredX = this.lastViewPortWidth * (this.itemsCount - 1);
                        let delta = desiredX - currentLeft;
                        this.translateX(node, delta);
                        setTimeout(() => {
                            this.inTransition = false;
                            this.turnOnTransitions();
                        }, 0);
                    }
                });
            }            
        }
    }

    renderPrevious = () => {
        if (!this.inTransition) {
            this.inTransition = true;
            this.turnOffTransitions();
            let renderedNodes = this.getAllRenderedNodes({ orientation: "horizontal", order: "desc" });
            let tailRenderedNode = renderedNodes[0];
            let currentLeft = tailRenderedNode.node.offsetLeft;
            let desiredX = this.lastViewPortWidth * (-1);
            let delta = desiredX - currentLeft;
            this.translateX(tailRenderedNode.node, delta);

            setTimeout(() => {
                this.turnOnTransitions();
                let renderedNodes = this.getAllRenderedNodes({ orientation: "horizontal", order: "asc" });
                for (var i = 0; i < renderedNodes.length; i++) {
                    var node = renderedNodes[i].node;
                    this.translateX(renderedNodes[i].node, this.getX(renderedNodes[i].node) + this.lastViewPortWidth);
                }
                this.inTransition = false;
            }, 0);
        }
    }

    turnOnTransitions = () => {
        angular.element(this.carouselInner).addClass("notransition");
    }

    turnOffTransitions = () => {
        angular.element(this.carouselInner).removeClass("notransition");
    }

    get carouselInner() { return this.$element.find(".carousel-inner")[0]; }
    inTransition: boolean;
    currentIndex: number;
    hasRendered: boolean;
    content: HTMLElement;
    template: HTMLElement;
    clone: HTMLElement;
    items: Array<any> = JSON.parse(this.$attrs["props"]);
    itemName: string = "movie";

    
}
