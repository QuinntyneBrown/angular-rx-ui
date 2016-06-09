import { IDispatcher, BaseActionCreator, Service } from "../core";
import { WindowResizeAction } from "./breakpoints.actions";

@Service({
    serviceName: "breakpointsActionCreator",
    viewProviders: ["$window","dispatcher", "guid", "invokeAsync"]
})
export class BreakpointsActionCreator {
    constructor(private $window: angular.IWindowService, private dispatcher: IDispatcher, private guid, private invokeAsync) {        

        Rx.Observable
            .fromEvent(angular.element($window), 'resize')
            .map(() => window.innerWidth)
            .debounce(100)
            .distinctUntilChanged()
            .subscribe(windowSize =>
                this.dispatcher.dispatch(new WindowResizeAction(windowSize)));        
    }    
    
}



