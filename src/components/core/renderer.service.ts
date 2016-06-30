import { provide } from "./provide";
import { Service } from "./service.decorator";

export enum scopeType {
    isolated = 0,
    global = 1,
}

export enum renderOutputType {
    Html = 0,
    AugmentedJquery = 1,
    NativeElement = 2
}

export interface IRenderOptions {
    outputType?: renderOutputType,
    html: string;
    parentScope?: angular.IScope,
    isScopeIsolated?: boolean;
    style?:any
}

export interface IRenderer {
    render(options: IRenderOptions): string | angular.IAugmentedJQuery | HTMLElement;
}

@Service({
    serviceName: "renderer",
    viewProviders:["$compile","$rootScope","getHtml"]
})
export class Renderer implements IRenderer {
    constructor(private $compile: angular.ICompileService,
        private $rootScope: angular.IRootScopeService,
        private getHtml
    ) { }

    options: IRenderOptions = {
        html: "",
        outputType: renderOutputType.AugmentedJquery,
        parentScope: this.$rootScope,
        isScopeIsolated: true,
        style: {}
    };

    render = (options: IRenderOptions): string | angular.IAugmentedJQuery | HTMLElement => {
        angular.extend(this.options, options);
        let augmentedJquery = this.$compile(options.html)(this.options.parentScope.$new(this.options.isScopeIsolated));
        angular.extend(augmentedJquery[0].style, this.options.style);
        if (this.options.outputType === renderOutputType.NativeElement)
            return augmentedJquery[0];
        if (this.options.outputType === renderOutputType.Html)
            return this.getHtml(augmentedJquery[0], false);
        return augmentedJquery
    }
}

let app = angular.module("renderer", ["getHtml"]);

provide(app, Renderer);