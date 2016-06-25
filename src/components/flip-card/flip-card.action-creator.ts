import { IDispatcher, Service } from "../core";

@Service({
    serviceName: "flipCardActionCreator",
    viewProviders: ["$location", "dispatcher", "guid"]
})
export class FlipCardActionCreator {
    constructor(private dispatcher: IDispatcher, private guid) { }
            
}


