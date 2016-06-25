import { IDispatcher, Service } from "../core";
import { OpenPopoverAction, ClosePopoverAction, PopoverOpenedAction, PopoverClosedAction } from "./popover.actions";
import { Popover } from "./popover.service";
import { IPopoverInstanceOptions } from "./popover-instance-options.d";

@Service({
    serviceName: "popoverActionCreator",
    viewProviders: ["$rootScope", "dispatcher", "guid","popover"]
})
export class PopoverActionCreator {
    constructor(private $rootScope: angular.IRootScopeService, private dispatcher: IDispatcher, private guid, private popover: Popover) {
        $rootScope.$on("$routeChangeSuccess", this.close);
    }

    public open = (options: IPopoverInstanceOptions) => {
        var guid = this.guid();
        options.guid = guid;
        this.popover.createInstance(options).then((instance: Popover) => {
            instance.show().then(() => this.dispatcher.dispatch(new PopoverOpenedAction(guid, instance)));
        });
        return guid;
    };

    public close = (options) => this.dispatcher.dispatch(new ClosePopoverAction(options.guid));

    public opened = (options) => {

    };

    public closed = (options) => this.dispatcher.dispatch(new PopoverClosedAction(options.id));
}


