import { IDispatcher, BaseActionCreator, Service, Observable } from "../core";
import { ModalActionCreator } from "../modal/modal.action-creator";
import { ResizeAction, KeyDownAction } from "./window.actions";

@Service({
    serviceName: "windowActionCreator",
    viewProviders: ["$window","dispatcher", "guid", "invokeAsync","modalActionCreator"]
})
export class WindowActionCreator {
    constructor(private $window:angular.IWindowService, private dispatcher: IDispatcher, private guid, private invokeAsync) {

        Observable
            .fromEvent($window, 'resize')
            .map(() => $window.innerWidth)
            .debounce(100)
            .distinctUntilChanged()
            .subscribe(innderWidth =>
                this.dispatcher.dispatch(new ResizeAction(innderWidth))); 

        Observable
            .fromEvent($window, 'keydown')
            .map( (e:KeyboardEvent) => e.keyCode)
            .debounce(100)
            .subscribe(keyCode =>this.dispatcher.dispatch(new KeyDownAction(keyCode))); 
    }    


}



