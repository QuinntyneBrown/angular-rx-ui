import { IDispatcher, BaseActionCreator, Service } from "../core";

@Service({
    serviceName: "counterActionCreator",
    viewProviders: ["dispatcher", "guid", "invokeAsync"]
})
export class CounterActionCreator {
    constructor(private dispatcher: IDispatcher, private guid, private invokeAsync) { }    

}



