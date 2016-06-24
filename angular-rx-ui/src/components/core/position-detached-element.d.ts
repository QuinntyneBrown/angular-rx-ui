import { IPositionDetachedElement } from "./position-detached-element.d";
import {IPositionDetachedElementResponseDto} from "./position-detached-element-response-dto.d";
import { IRect } from "./rect.d";

export interface IPositionDetachedElement {
    (triggerElement: HTMLElement,
        element: HTMLElement,
        directionPriorityList: string[],
        elementRect: ClientRect,
        alignment: string,
        elementSurroundingWindowSpaceRect: IRect): IPositionDetachedElementResponseDto;

}