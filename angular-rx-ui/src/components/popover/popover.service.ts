import { Injectable, Store, IAppState, Service } from "../core";
import { IPosition, ITemplate, IRectangle } from "../core";
import { IPopover } from "./popover.d";
import { IPopoverInstanceOptions } from "./popover-instance-options.d";
import * as actions from "./popover.actions";

@Injectable()
@Service({
    serviceName: "popover",
    viewProviders: ["$compile", "$document", "$http", "$q", "$timeout", "guid", "position", "store","template"]
})
export class Popover implements IPopover {
        
    constructor(
        private $compile: ng.ICompileService,
        private $document: ng.IDocumentService,
        private $http: ng.IHttpService,
        private $q: ng.IQService,
        private $timeout: ng.ITimeoutService,
        private guid:any,
        private position: IPosition,
        private store: Store<IAppState>,
        private template: ITemplate           
    ) {

        store.subscribe(this.storeOnChange);
    }

    public createInstance = (options: IPopoverInstanceOptions) => {
        var deferred = this.$q.defer();
        var instance = new Popover(
            this.$compile,
            this.$document,
            this.$http,
            this.$q,
            this.$timeout,
            this.guid,
            this.position,
            this.store,
            this.template);

        instance.scope = options.scope;
        instance.triggerAugmentedJQuery = options.triggerAugmentedJQuery;

        this.$q.all([this.template.get({ templateUrl: options.templateUrl })]).then((resultsArray: any) => {
            instance.templateHtml = resultsArray[0];
            deferred.resolve(instance);
        });

        return deferred.promise;
    }

    private storeOnChange = (state: IAppState) => {
        if (state.lastTriggeredByAction === actions.OpenPopoverAction) {
            
        }

        if (state.lastTriggeredByAction === actions.ClosePopoverAction) {

        }
    }
     
    private setInitialCss = () => {
        this.augmentedJQuery[0].setAttribute("style", "-webkit-transition: opacity " + this.transitionDurationInMilliseconds + "ms ease-in-out;-o-transition: opacity " + this.transitionDurationInMilliseconds + "ms ease-in-out;transition: opacity " + this.transitionDurationInMilliseconds + "ms ease-in-out;");
        this.augmentedJQuery[0].style.opacity = "0";
        this.augmentedJQuery[0].style.position = "fixed";
        this.augmentedJQuery[0].style.top = "0";
        this.augmentedJQuery[0].style.left = "0";
        this.augmentedJQuery[0].style.display = "block";
    }

    public show = () => {
        let deferred = this.$q.defer();            
        this.augmentedJQuery = this.$compile(this.templateHtml)(this.scope.$new(true));
        this.setInitialCss();
        this.position.below(this.triggerAugmentedJQuery[0], this.augmentedJQuery[0], 30).then(() => {
            document.body.appendChild(this.augmentedJQuery[0]);                
            this.$timeout(() => { this.augmentedJQuery.css("opacity", 100); }, 100, false);
            deferred.resolve();
        });
        return deferred.promise;
    }
        
    public hide = () => {
        let deferred = this.$q.defer();            
        this.augmentedJQuery.css("opacity", 0);
        this.augmentedJQuery[0].addEventListener('transitionend', () => {
            angular.element(this.augmentedJQuery[0]).scope().$destroy();
            this.augmentedJQuery[0].parentNode.removeChild(this.augmentedJQuery[0]);
            deferred.resolve();
        }, false);                            
        return deferred.promise;
    }

    private templateHtml: string;
    private scope: ng.IScope;
    private augmentedJQuery: ng.IAugmentedJQuery;
    private triggerAugmentedJQuery: ng.IAugmentedJQuery        
    private rectangle: IRectangle;
    private get transitionDurationInMilliseconds() { return 1000; }
    private attributes: ng.IAttributes;
}
