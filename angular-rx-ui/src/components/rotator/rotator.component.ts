import { CanActivate, ChangeDetectionStrategy, Component, Observable } from "../core";
import { RotatorActionCreator } from "./rotator.action-creator";
import { RotatorPreviousAction, RotatorNextAction } from "./rotator.actions";
import { KeyDownAction, ResizeAction } from "../window/window.actions";

@Component({
    template: require("./rotator.component.html"),
    styles: require("./rotator.component.css"),
    selector: "rotator",
    transclude: "element",
    inputs: [
        "height",
        "items",
        "nextButtonImageUrl",
        "previousButtonImageUrl",
        "width"
    ],
    viewProviders: ["$attrs",
        "$compile",
        "$element",
        "$http",
        "$interval",
        "$location",
        "$q",
        "$scope",
        "$timeout",
        "$transclude",
        "debounce",
        "getFromUrlSync",
        "getX",
        "rotatorActionCreator",
        "translateX",
        "translateXAsync"],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class RotatorComponent {
    constructor(
        private $attrs: ng.IAttributes,
        private $compile: ng.ICompileService,
        private $element: ng.IAugmentedJQuery,
        private $http: ng.IHttpService,
        private $interval: ng.IIntervalService,
        private $location: ng.ILocationService,
        private $q: ng.IQService,
        private $scope: ng.IScope,
        private $timeout: ng.ITimeoutService,
        private $transclude: Function,
        private debounce: Function,
        private getFromUrlSync: Function,
        private getX: Function,
        private rotatorActionCreator: RotatorActionCreator,
        private translateX: Function,
        private translateXAsync: Function) { }

    storeOnChange = state => {
        if (state.lastTriggeredByAction instanceof KeyDownAction)
            this.onKeyDown({ keyCode: state.lastTriggeredByAction.keyCode });
        
        if (state.lastTriggeredByAction instanceof ResizeAction) { }
            
    }

    next = () => this.rotatorActionCreator.next(this.id);

    previous = () => this.rotatorActionCreator.previous(this.id);

    nextButtonImageUrl: any;

    private ngOnInit = () => {
        this.$element.find(".view-port").css("width", this.width);

        let fragment = document.createDocumentFragment();

        for (var i = 0; i < this.items.length; i++) {
            var childScope: any = this.$scope.$new(false);
            childScope[this.$attrs["rotatorForName"] || "rotatorItem"] = this.items[i];
            childScope.width = this.width;
            childScope.height = this.height;
            childScope.$$index = i;
            childScope.$$isFirst = (i === 0);
            childScope.$$isLast = (i === this.items.length - 1);            
            var slide = angular.element(this.template);
            slide.attr("ng-swipe-left", "vm.swipeLeft()");
            slide.attr("ng-swipe-right", "vm.swipeRight()");
            let itemContent = this.$compile(slide)(childScope);
            itemContent.addClass("slide");
            fragment.appendChild(itemContent[0]);
        }

        this.containerNavtiveElement.appendChild(fragment);

        this.turnOffTransitions();

        if (this.queryStringParam && this.queryStringParamIndex != 0) {
            for (var i = this.slideNavtiveElements.length - 1; i >= 0; i--) {
                var initialMoveX = (-1) * (this.queryStringParamIndex * (Number(this.width)));
                if (i < this.queryStringParamIndex - this.buffer) {
                    this.translateX(this.slideNavtiveElements[i], initialMoveX + Number(this.width) * this.items.length);
                } else {
                    this.translateX(this.slideNavtiveElements[i], initialMoveX);
                }
            }
            this.currentIndex = this.queryStringParamIndex;
        } else {
            this.currentIndex = 0;
            let desiredX = Number(this.width) * (-1);
            let delta = desiredX - ((this.items.length - 1) * Number(this.width));
            this.translateX(this.rendererdNodes[this.items.length - 1].node, delta);
            this.isAnimating = false;
        }

        setTimeout(() => { this.turnOnTransitions(); });        
    }

    private get buffer() { return 1; }

    private onKeyDown = options => {
        
        switch (options.keyCode) {
            case 37:
                this.onPreviousAsyncDebounce();
                break;
            case 39:
                this.onNextAsyncDebounce();
                break;
        }
    }

    private onLocationChangeSuccess = () => {
        if (this.currentIndex != -1
            && this.items[this.currentIndex][this.$attrs["querySearchField"] || 'id'] != this.queryStringParam
            && this.queryStringParamIndex != this.currentIndex) {

            //TO DO: Turn off transitions for manual manipulation of location bar
            if (this.currentIndex === this.items.length - 1 && this.queryStringParamIndex === 0)
                return this.onNextAsync();

            if (this.currentIndex === 0 && this.queryStringParamIndex === this.items.length - 1)
                return this.onPreviousAsync();

            if ((this.currentIndex - this.queryStringParamIndex) < 0) {
                return this.onNextAsync();
            } else {
                return this.onPreviousAsync();
            }

        }
    }

    public get queryStringParam() { return this.$location.search()[this.$attrs["querySearchField"] || 'id']; }

    public get queryStringParamIndex() {
        let value = -1;
        for (var i = 0; i < this.items.length; i++) {
            if (this.items[i][this.$attrs["querySearchField"] || 'id'] == this.queryStringParam) {
                value = i;
            }
        }
        return value;
    }

    public onPreviousAsyncDebounce = () => { this.debounce(this.onPreviousAsync, 10)(); }
    
    public swipeLeft = () => this.onNextAsyncDebounce();

    public swipeRight = () => this.onPreviousAsyncDebounce();
    
    public onPreviousAsync = () => {
        return this.move({ x: (Number(this.width)) }).then(() => {
            this.turnOffTransitions();
            let desiredX = Number(this.width) * (-1);
            let delta = desiredX - this.rendererdNodes[this.items.length - 1].offsetLeft;
            this.translateX(this.rendererdNodes[this.items.length - 1].node, delta);
            this.inTransition = true;
            this.currentIndex = (this.currentIndex === 0) ? this.items.length - 1 : this.currentIndex - 1;
            setTimeout(() => {
                this.turnOnTransitions();
                this.inTransition = false;
            }, 300);
        });
    }

    public onNextAsyncDebounce = () => { this.debounce(this.onNextAsync, 10)(); }

    public onNextAsync = () => {
        return this.move({ x: (-1) * (Number(this.width)) }).then(() => {
            this.turnOffTransitions();
            let desiredX = Number(this.width) * (this.items.length - 2);
            let delta = desiredX - this.rendererdNodes[0].offsetLeft;
            this.translateX(this.rendererdNodes[0].node, delta);
            this.inTransition = true;
            this.currentIndex = (this.currentIndex === this.items.length - 1) ? 0 : this.currentIndex + 1;
            setTimeout(() => {
                this.turnOnTransitions();
                this.inTransition = false;
            }, 300);
        });
    }

    public move = (options: any) => {
        var deferred = this.$q.defer();
        if (!this.isAnimating && !this.inTransition) {
            let promises = [];
            this.isAnimating = true;

            if (options.x < 0) {
                for (var i = this.slideNavtiveElements.length - 1; i > -1; i--) {
                    promises.push(this.translateXAsync({ element: this.slideNavtiveElements[i], x: (this.getX(this.slideNavtiveElements[i]) + options.x) }));
                }
            }
            if (options.x >= 0) {
                for (var i = 0; i < this.slideNavtiveElements.length; i++) {
                    promises.push(this.translateXAsync({ element: this.slideNavtiveElements[i], x: (this.getX(this.slideNavtiveElements[i]) + options.x) }));
                }
            }
            this.$q.all(promises).then(() => {
                this.isAnimating = false;
                deferred.resolve();
            });
        } else {
            deferred.reject();
        }
        return deferred.promise;
    }

    public atBegining() { return this.currentIndex == 0; }

    public atEnd() { return this.currentIndex == this.items.length - 1; }

    public dispose = () => {
        angular.element(this.containerNavtiveElement).find(".slide").remove();
        this.containerNavtiveElement.innerHTML = "";
        this.$element[0].innerHTML = null;
        this.$element = null;
        this.$attrs = null;
        this.clone = null;
        delete this.$element;
        delete this.clone;
    }

    public turnOffTransitions = () => { this.$element.addClass("notransition"); }

    public turnOnTransitions() { this.$element.removeClass("notransition"); }

    private get slideNavtiveElements() { return this.containerNavtiveElement.children; }

    private clone: any;

    private _currentIndex: number = -1;

    private get currentIndex() { return this._currentIndex; }

    private set currentIndex(value: number) {
        this._currentIndex = value;
        this.$scope.$emit("componentUpdate", { scope: this.$scope });
        let url = this.items[this.currentIndex][this.$attrs["querySearchField"] || 'id'];
        this.$location.search(this.$attrs["querySearchField"] || 'id', url);
    }

    private _template: string = null;

    private get template() {
        if (this._template != null)
            return this._template;

        if (this.$attrs["contentUrl"]) {
            this._template = this.getFromUrlSync({ url: this.$attrs["contentUrl"] });
        } else {
            this._template = this.clone;
        }
        return this._template;
    }

    private isAnimating: boolean;

    private inTransition: boolean;

    private get containerNavtiveElement() { return this.$element.find(".container")[0]; }

    private items: any;

    private width: string;

    private height: string;

    private id: string;

    private get rendererdNodes() {
        var renderedNodes = [];

        for (var i = 0; i < this.slideNavtiveElements.length; i++) {
            let x = this.getX(this.slideNavtiveElements[i]);
            let offsetLeft = (<HTMLElement>this.slideNavtiveElements[i]).offsetLeft;
            let left = x + offsetLeft;
            let node = this.slideNavtiveElements[i];
            renderedNodes.push({
                x: x,
                offsetLeft: offsetLeft,
                left: left,
                node: node
            });
        }

        return renderedNodes.sort((a: any, b: any) => {
            return a.left - b.left;
        });
    }
}
