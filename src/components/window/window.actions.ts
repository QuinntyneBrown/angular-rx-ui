import { Action } from "../core";

Action({
    type: "window.resizeAction"
})
export class ResizeAction {
    constructor(public innerWidth) { }
}

Action({
    type: "window.keyDownAction"
})
export class KeyDownAction {
    constructor(public keyCode) { }
}

