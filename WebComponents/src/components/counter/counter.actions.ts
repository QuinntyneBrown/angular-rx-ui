import { Action } from "../core";

@Action({
    type: "counter.increment"
})
export class Increment { }

@Action({
    type: "counter.decrement"
})
export class Decrement { }

