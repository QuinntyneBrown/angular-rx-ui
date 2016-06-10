import { IDispatcher, BaseActionCreator, Service, Observable } from "../core";
import { WindowResizeAction } from "./breakpoints.actions";

@Service({
    serviceName: "breakpointsActionCreator",
    viewProviders: ["$window","dispatcher", "guid", "invokeAsync"]
})
export class BreakpointsActionCreator {
    constructor(private $window: angular.IWindowService, private dispatcher: IDispatcher, private guid, private invokeAsync) {        
        Observable
            .fromEvent($window, 'resize')
            .map(() => $window.innerWidth)
            .debounce(100)
            .distinctUntilChanged()
            .subscribe(innderWidth =>
                this.dispatcher.dispatch(new WindowResizeAction(innderWidth)));               
    }        
}