import { Action } from "../core";

@Action({
    type: "carousel.nextAction"
})
export class CarouselNextAction { }

@Action({
    type: "carousel.previousAction"
})
export class CarouselPreviousAction { }

