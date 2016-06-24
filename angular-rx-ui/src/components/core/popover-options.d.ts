import { IPopoverTriggerScope } from "./popover-trigger-scope.d";

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