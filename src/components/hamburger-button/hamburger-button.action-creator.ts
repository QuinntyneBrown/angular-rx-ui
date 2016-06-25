import { IDispatcher, BaseActionCreator, Service } from "../core";
import { ModalActionCreator } from "../modal/modal.action-creator";
import { ClickAction } from "./hamburger-button.actions";

@Service({
    serviceName: "hamburgerButtonActionCreator",
    viewProviders: ["dispatcher", "guid", "invokeAsync","modalActionCreator"]
})
export class HamburgerButtonActionCreator {
    constructor(private dispatcher: IDispatcher, private guid, private invokeAsync, private modalActionCreator: ModalActionCreator) { }    

    click = () => this.dispatcher.dispatch(new ClickAction());
}



