import { IDispatcher, Service } from "../core";
import { Increment, Decrement } from "./counter.actions";

@Service({
    serviceName: "counterActionCreator",
    viewProviders: ["dispatcher", "guid"]
})
export class CounterActionCreator {
    constructor(private dispatcher: IDispatcher, private guid) { }
    increment = () => this.dispatcher.dispatch(new Increment());
    decrement = () => this.dispatcher.dispatch(new Decrement());

}