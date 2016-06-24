import { Action } from "../core";


@Action({
    type:"popover.openPopoverAction"
})
export class OpenPopoverAction { constructor() { } }

@Action({
    type: "popover.closePopoverAction"
})
export class ClosePopoverAction { constructor() { } }
