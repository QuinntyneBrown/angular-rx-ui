import { IDispatcher, Service } from "../core";
import { RotatorNextAction, RotatorPreviousAction } from "./rotator.actions";

@Service({
    serviceName: "rotatorActionCreator",
    viewProviders:["dispatcher","guid"]
})
export class RotatorActionCreator {
    constructor(private dispatcher: IDispatcher, private guid) { }

    next = id => this.dispatcher.dispatch(new RotatorNextAction(id));

    previous = id => this.dispatcher.dispatch(new RotatorPreviousAction(id));
}