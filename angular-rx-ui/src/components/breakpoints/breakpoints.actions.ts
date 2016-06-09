import { Action } from "../core";

Action({
    type: "breakpoints.windowResizeAction"
})
export class WindowResizeAction {
    constructor(public previousWindowSize: number, public currentWindowSize) { }
}
