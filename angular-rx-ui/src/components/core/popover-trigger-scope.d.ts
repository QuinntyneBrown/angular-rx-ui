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