import { IDispatcher, BaseActionCreator, Service } from "../core";
import { ModalActionCreator } from "../modal/modal.action-creator";

@Service({
    serviceName: "boldButtonActionCreator",
    viewProviders: ["dispatcher", "guid", "invokeAsync","modalActionCreator"]
})
export class BoldButtonActionCreator {
    constructor(private dispatcher: IDispatcher, private guid, private invokeAsync, private modalActionCreator: ModalActionCreator) { }    

}



