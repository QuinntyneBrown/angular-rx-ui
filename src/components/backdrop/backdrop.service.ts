import { Service } from "../core";

@Service({
    serviceName: "backdrop",
    viewProviders: ["$q", "appendToBodyAsync", "extendCssAsync", "removeElement", "setOpacityAsync"]
})
export class Backdrop {
    constructor(
        private $q: angular.IQService,
        private appendToBodyAsync: any,
        private extendCssAsync: any,
        private removeElement: any,
        private setOpacityAsync: any) { }

    public createInstance = (options: any) => {
        var instance = new Backdrop(this.$q, this.appendToBodyAsync, this.extendCssAsync, this.removeElement, this.setOpacityAsync);
        return instance;
    }

    public openAsync = () => {
        let deferred = this.$q.defer();
        this.initializeAsync()
            .then(this.appendBackDropToBodyAsync)
            .then(this.showAsync)
            .then(() => deferred.resolve(this.isOpen = true));
        return deferred.promise;
    }

    public closeAsync = () => {
        let deferred = this.$q.defer();
        this.hideAsync().then((results) => {
            this.dispose();
            this.isOpen = false;
            deferred.resolve();
        });
        return deferred.promise;
    }
    
    public initializeAsync = () => {
        let deferred = this.$q.defer();
        this.augmentedJQuery = angular.element("<div></div>");
        this.extendCssAsync({
            nativeHTMLElement: this.nativeHTMLElement,
            cssObject: {
                "-webkit-transition": "opacity 300ms ease-in-out",
                "-o-transition": "opacity 300ms ease-in-out",
                "transition": "opacity 300ms ease-in-out",
                "opacity": "0",
                "position": "fixed",
                "top": "0",
                "left": "0",
                "height": "100%",
                "width": "100%",
                "background-color": "rgba(0, 0, 0, .25)",
                "display": "block"
            }
        }).then(() => deferred.resolve());
        return deferred.promise;
    }

    public showAsync = () => this.setOpacityAsync({ nativeHtmlElement: this.nativeHTMLElement, opacity: 25 });
    
    public appendBackDropToBodyAsync = () => this.appendToBodyAsync({ nativeElement: this.nativeHTMLElement });
    
    public hideAsync = () => this.setOpacityAsync({ nativeHtmlElement: this.nativeHTMLElement, opacity: 0 });
    
    public dispose = () => {
        this.removeElement({ nativeHTMLElement: this.nativeHTMLElement });
        this.augmentedJQuery = null;
    }

    public get nativeHTMLElement(): HTMLElement { return this.augmentedJQuery[0]; }

    public augmentedJQuery: ng.IAugmentedJQuery;

    public isOpen: boolean = false;

    public isAnimating: boolean = false;
}
