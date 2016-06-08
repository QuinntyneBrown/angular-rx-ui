import { Action } from "../core";

@Action({
    type: "modal.openModalAction"
})
export class OpenModalAction { constructor(public html) { } }

@Action({
    type: "modal.closeModalAction"
})
export class CloseModalAction { constructor() { } }



