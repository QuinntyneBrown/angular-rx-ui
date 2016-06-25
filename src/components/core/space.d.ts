import { IRectangle } from "./rectangle.d";

export interface ISpace {
    below(spaceNeeded: number, rectangle: IRectangle): boolean;
    above(spaceNeeded: number, rectangle: IRectangle): boolean;
    right(spaceNeeded: number, rectangle: IRectangle): boolean;
    left(spaceNeeded: number, rectangle: IRectangle): boolean;
}