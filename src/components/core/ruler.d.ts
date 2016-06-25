import { IRectangle } from "./rectangle.d";

export interface IRuler {
    measure(element: HTMLElement, detachedFromDom?: boolean): ng.IPromise<IRectangle>;
}