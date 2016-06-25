import { Action } from "../core"; 

@Action({
    type: "rotator.rotatorNextAction"
})
export class RotatorNextAction {
    constructor(private id: string) { }
}

@Action({
    type: "rotator.rotatorPreviousAction"
})
export class RotatorPreviousAction {
    constructor(private id:string) { }
}