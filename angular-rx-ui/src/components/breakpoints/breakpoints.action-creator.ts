import { IDispatcher, BaseActionCreator, Service } from "../core";
import { WindowResizeAction } from "./breakpoints.actions";

@Service({
    serviceName: "breakpointsActionCreator",
    viewProviders: ["$window","dispatcher", "guid", "invokeAsync"]
})
export class BreakpointsActionCreator {
    constructor(private $window: angular.IWindowService, private dispatcher: IDispatcher, private guid, private invokeAsync) {        

        Rx.Observable.fromEvent(angular.element($window), 'resize')
            .map(function () {
                return window.innerWidth;
            })
            .debounce(100)
            .distinctUntilChanged()
            .flatMapLatest(this.windowResize);        
    }    

    windowResize = (windowInnerWidth): any => {        
        if (this._windowInnerWidth != windowInnerWidth)
            this.dispatcher.dispatch(new WindowResizeAction(0, windowInnerWidth));        
        this._windowInnerWidth = windowInnerWidth;
    }
    
    _windowInnerWidth;
}


