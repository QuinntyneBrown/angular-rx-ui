import { IDispatcher, BaseActionCreator, Service } from "../core";

@Service({
    serviceName: "articleActionCreator",
    viewProviders: ["dispatcher", "guid", "invokeAsync"]
})
export class ArticleActionCreator {
    constructor(private dispatcher: IDispatcher, private guid, private invokeAsync) { }    

}



