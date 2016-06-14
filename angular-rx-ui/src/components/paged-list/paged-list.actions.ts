import { IDispatcher, Service } from "../core";

@Service({
	serviceName: "pagedListActionCreator",
    viewProviders: ["dispatcher","guid"]
})
export class PagedListActionCreator  {
    constructor(private dispatcher: IDispatcher, private guid) {

    }    
}



