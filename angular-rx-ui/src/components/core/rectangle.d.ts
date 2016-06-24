import { IPoint } from "./point.d";
import { IRectangleInstanceOptions } from "./rectangle-instance-options.d";

export interface IRectangle {
    createInstance(options: IRectangleInstanceOptions): IRectangle;
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
    radiusY: number;
}