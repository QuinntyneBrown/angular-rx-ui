import { OpenModalAction, CloseModalAction } from "./modal.actions";
import { IModalActionCreator, IOpenModalOptions } from "./modal.d";
import { IDispatcher, Service } from "../core";

@Service({
    serviceName: "modalActionCreator",
    viewProviders: ["$rootScope", "dispatcher"]
})
export class ModalActionCreator implements IModalActionCreator {
    constructor(private $rootScope: angular.IRootScopeService, private dispatcher: IDispatcher) {
        $rootScope.$on("$routeChangeSuccess", this.close);
    }

    open = (options: IOpenModalOptions) => this.dispatcher.dispatch(new OpenModalAction(options.html));
    close = () => this.dispatcher.dispatch(new CloseModalAction());
}