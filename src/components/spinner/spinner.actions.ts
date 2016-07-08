import { Action } from "../core";

@Action({
    type: "showSpinnerAction"
})
export class ShowSpinnerAction { }

@Action({
    type: "hideSpinnerAction"
})
export class HideSpinnerAction { }
