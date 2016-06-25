export interface IPosition {
    below(a: HTMLElement, b: HTMLElement, space?: number): ng.IPromise<any>;
    above(a: HTMLElement, b: HTMLElement, space?: number): ng.IPromise<any>;
    right(a: HTMLElement, b: HTMLElement, space?: number): ng.IPromise<any>;
    left(a: HTMLElement, b: HTMLElement, space?: number): ng.IPromise<any>;
    somewhere(a: HTMLElement, b: HTMLElement, space: number, directionPriorityList: Array<string>): ng.IPromise<any>;
}