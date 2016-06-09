import { OpenModalAction, CloseModalAction } from "./modal.actions";
import { IDispatcher, Service } from "../core";

@Service({
    serviceName: "modalActionCreator",
    viewProviders: ["$rootScope", "dispatcher"]
})
export class ModalActionCreator {
    constructor(private $rootScope: angular.IRootScopeService, private dispatcher: IDispatcher) {
        $rootScope.$on("$routeChangeSuccess", this.close);
    }

    open = options => this.dispatcher.dispatch(new OpenModalAction(options.html));

    close = () => this.dispatcher.dispatch(new CloseModalAction());
}