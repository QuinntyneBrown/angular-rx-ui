import { IDispatcher, Service } from "../core";

@Service({
    serviceName: "rotatorActionCreator",
    viewProviders:["dispatcher","guid"]
})
export class RotatorActionCreator {
    constructor(private dispatcher: IDispatcher, private guid) { }

}