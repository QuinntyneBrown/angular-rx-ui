import { IDispatcher, BaseActionCreator, Service } from "../core";
import { ModalActionCreator } from "../modal/modal.action-creator";

@Service({
    serviceName: "buttonActionCreator",
    viewProviders: ["dispatcher", "guid", "invokeAsync","modalActionCreator"]
})
export class ButtonActionCreator {
    constructor(private dispatcher: IDispatcher, private guid, private invokeAsync, private modalActionCreator: ModalActionCreator) { }    

}



