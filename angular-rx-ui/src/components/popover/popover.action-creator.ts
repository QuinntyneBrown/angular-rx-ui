import { IDispatcher, Service } from "../core";
import { OpenPopoverAction, ClosePopoverAction } from "./popover.actions";

@Service({
    serviceName: "popoverActionCreator",
    viewProviders: ["$rootScope", "dispatcher", "guid"]
})
export class PopoverActionCreator {
    constructor(private $rootScope: angular.IRootScopeService, private dispatcher: IDispatcher, private guid) {
        $rootScope.$on("$routeChangeSuccess", this.close);
    }

    public open = () => this.dispatcher.dispatch(new OpenPopoverAction());

    public close = () => this.dispatcher.dispatch(new ClosePopoverAction());
}


