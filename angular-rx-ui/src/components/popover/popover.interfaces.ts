 

export interface IPosition {  
    below(a: HTMLElement, b: HTMLElement, space?:number): ng.IPromise<any>;
    above(a: HTMLElement, b: HTMLElement, space?: number): ng.IPromise<any>;  
    right(a: HTMLElement, b: HTMLElement, space?: number): ng.IPromise<any>;
    left(a: HTMLElement, b: HTMLElement, space?: number): ng.IPromise<any>;  
}

export interface ISpace {
    below(spaceNeeded: number, rectangle: IRectangle): boolean;
    above(spaceNeeded: number, rectangle: IRectangle): boolean;
    right(spaceNeeded: number, rectangle: IRectangle): boolean;
    left(spaceNeeded: number, rectangle: IRectangle): boolean;
}

export interface ITemplate {
    get(options:ITemplateGetOptions): ng.IPromise<string>;
}

export interface ITemplateGetOptions {
    templateUrl:string;
}

export interface IPopoverScope extends ng.IScope {
    position: string;
    noInfoMessage: string;
    isVisible: boolean;
    hide: boolean;
    hasInfo(): boolean;
    vm: IPopoverVm;
    isMobile(): boolean;
}

export interface ITranslateXY {
    (element:HTMLElement,x:number, y:number)
}

export interface IPopover {
    createInstance(options: IPopoverInstanceOptions): ng.IPromise<IPopover>;
    show(): ng.IPromise<any>;
    hide():ng.IPromise<any>;
}

export interface IPopoverInstanceOptions {
    templateUrl?: string;
    template?: string;
    scope: ng.IScope;
    triggerAugmentedJQuery: ng.IAugmentedJQuery;
}

export interface IPopoverVm extends ng.IScope {
    email: string;
    phone: string;
}

export interface IRectangleInstanceOptions {
    clientRect?: ClientRect;
    left?: number;
    right?: number;
    top?: number;
    bottom?: number;
    height?: number;
    width?: number;
}

export interface IRectangle {
    createInstance(options: IRectangleInstanceOptions):IRectangle;
    left: number;
    right: number;
    top: number;
    bottom: number;
    height: number;
    width: number;
    centerX: number;
    centerY: number;
    middle: IPoint;
    radiusX: number;
    radiusY:number;
}

export interface IPoint {
    x: number;
    y: number;
}

export interface IRuler {
    measure(element: HTMLElement, detachedFromDom?: boolean): ng.IPromise<IRectangle>;        
}

export interface IPopoverOptions {
    alignment?: string;
    displayArrow?: boolean;
    element?: any;
    margin?: string;
    templateUrl?: string;
    triggerScope?: IPopoverTriggerScope;
    transitionDurationInMilliseconds?: number;
    template?: HTMLElement;
    title?: string;
    visibilityDurationInMilliseconds?: number;
    defaultDirection?: string;
}

export interface IPopoverTriggerScope extends ng.IScope {
    templateUrl?: string;
    triggerEvent?: string;
    defaultDirection?: string;
    contactName?: string;
    contactPhone?: string;
    contactEmail?: string;
    transitionDurationInMilliseconds?: number;
    visibilityDurationInMilliseconds?: number;
    popUpTrigger?: any;
    alignment?: string;
    margin?: string;
    popoverTitle?: string;
    appendToBody?: boolean;
    displayArrow?: boolean;
    viewBag?: any;
}

export interface IPositionDetachedElement {
    (triggerElement: HTMLElement,
        element: HTMLElement,
        directionPriorityList: string[],
        elementRect: ClientRect,
        alignment: string,
        elementSurroundingWindowSpaceRect: IRect): IPositionDetachedElementResponseDto;

}

export interface IRect {
    top: number;
    left: number;
    right: number;
    bottom: number;
}

export interface IPositionDetachedElementResponseDto {
    position: string;
    elementRect: ClientRect;
}
