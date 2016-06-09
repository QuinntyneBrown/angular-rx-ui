import { IDispatcher, BaseActionCreator, Service } from "../core";
import { ModalActionCreator } from "../modal/modal.action-creator";
import { CarouselNextAction, CarouselPreviousAction } from "./carousel.actions";

@Service({
    serviceName: "carouselActionCreator",
    viewProviders: ["dispatcher", "guid"]
})
export class CarouselActionCreator {
    constructor(private dispatcher: IDispatcher, private guid) { }    
    next = () => this.dispatcher.dispatch(new CarouselNextAction());
    previous = () => this.dispatcher.dispatch(new CarouselPreviousAction());
}



