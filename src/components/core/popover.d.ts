import { IPopoverInstanceOptions } from "./popover-instance-options.d";

export interface IPopover {
    createInstance(options: IPopoverInstanceOptions): ng.IPromise<IPopover>;
    show(): ng.IPromise<any>;
    hide(): ng.IPromise<any>;
}