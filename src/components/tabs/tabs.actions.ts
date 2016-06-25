import { Action } from "../core";

@Action({
    type:"tabs.tabChildLoadedAction"
})
export class TabChildLoadedAction { constructor() { } }

@Action({
    type: "tabs.setCurrentTabAction"
})
export class SetCurrentTabAction { constructor(public tabName: string, public index: number) { } }

