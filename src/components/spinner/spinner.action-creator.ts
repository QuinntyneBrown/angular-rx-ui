import { IDispatcher, BaseActionCreator, Service } from "../core";
import { ModalActionCreator } from "../modal/modal.action-creator";

@Service({
    serviceName: "spinnerActionCreator",
    viewProviders: ["dispatcher", "guid", "invokeAsync","modalActionCreator"]
})
export class SpinnerActionCreator {
    constructor(private dispatcher: IDispatcher, private guid, private invokeAsync, private modalActionCreator: ModalActionCreator) { }    

}



