import { Injectable, Store, IAppState, Service } from "../core";
import { IPosition, ITemplate, IRectangle } from "../core";
import { IPopover } from "./popover.d";
import { IPopoverInstanceOptions } from "./popover-instance-options.d";
import { PopoverConfig } from "./popover-config";
import * as actions from "./popover.actions";
import { IRenderer } from "../core";

@Injectable()
@Service({
    serviceName: "popover",
    viewProviders: ["$compile", "$document", "$http", "$q", "$timeout", "guid", "popoverConfig","position","renderer","store","template"]
})
export class Popover implements IPopover {
        
    constructor(
        private $compile: ng.ICompileService,
        private $document: ng.IDocumentService,
        private $http: ng.IHttpService,
        private $q: ng.IQService,
        private $timeout: ng.ITimeoutService,
        private guid: any,
        private popoverConfig: PopoverConfig,
        private position: IPosition,
        private renderer: IRenderer,
        private store: Store<IAppState>,
        private template: ITemplate           
    ) { }

    public createInstance = (options: IPopoverInstanceOptions) => {
        var deferred = this.$q.defer();
        var instance = new Popover(
            this.$compile,
            this.$document,
            this.$http,
            this.$q,
            this.$timeout,
            this.guid,
            this.popoverConfig,
            this.position,
            this.renderer,
            this.store,
            this.template);

        instance.scope = options.scope;
        instance.triggerAugmentedJQuery = options.triggerAugmentedJQuery;        
        instance.guid = options.guid;
        this.store.subscribe(instance.storeOnChange)
        this.$q.all([this.template.get({ templateUrl: options.templateUrl })]).then((resultsArray: any) => {
            instance.templateHtml = resultsArray[0];
            deferred.resolve(instance);
        });

        return deferred.promise;
    }

    private storeOnChange = (state: IAppState) => {                
        if (state.lastTriggeredByAction instanceof actions.ClosePopoverAction && this.guid === state.lastTriggeredByAction.id) {
            this.hide().then(() => {
                this.store.dispatch(new actions.PopoverClosedAction(this.guid));
            });
        }
    }
     
    private get style() {
        return {
            "-webkit-transition":"opacity " + this.popoverConfig.transitionDurationInMilliseconds + "ms ease-in-out",
            "-o-transition":"opacity " + this.popoverConfig.transitionDurationInMilliseconds + "ms ease-in-out",
            "-ms-transition":"opacity " + this.popoverConfig.transitionDurationInMilliseconds + "ms ease-in-out",
            "transition":"opacity " + this.popoverConfig.transitionDurationInMilliseconds + "ms ease-in-out",
            "opacity":"0",
            "position":"fixed",
            "top":"0",
            "left":"0",
            "display":"block"
        };
    } 
    public show = () => {
        let deferred = this.$q.defer();            
        this.augmentedJQuery = <angular.IAugmentedJQuery>this.renderer.render({ html: this.templateHtml, parentScope: this.scope, style:this.style });
        this.position.somewhere(this.triggerAugmentedJQuery[0], this.augmentedJQuery[0], this.popoverConfig.distance, this.popoverConfig.directionPriorityList).then(() => {
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
    private attributes: ng.IAttributes;
}
