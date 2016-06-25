import { IRectangle } from "./rectangle.d";

export interface IRulerOptions {
    element?: HTMLElement;
    elements?: Array<HTMLElement>;
}

export interface IRuler {
    measure(options): ng.IPromise<IRectangle> | ng.IPromise<Array<IRectangle>>;    
}