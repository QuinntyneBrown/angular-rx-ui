import { Action } from "../core";


@Action({
    type:"popover.openPopoverAction"
})
export class OpenPopoverAction { constructor(public id, public entity) { } }

@Action({
    type: "popover.closePopoverAction"
})
export class ClosePopoverAction { constructor(public id:string) { } }

@Action({
    type: "popover.popoverOpenedAction"
})
export class PopoverOpenedAction { constructor(public id:string, entity) { } }

@Action({
    type: "popover.popoverClosedAction"
})
export class PopoverClosedAction { constructor(public id: string) { } }