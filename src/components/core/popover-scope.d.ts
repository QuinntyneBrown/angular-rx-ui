import { IPopoverVm } from "./popover-vm.d";

export interface IPopoverScope extends ng.IScope {
    position: string;
    noInfoMessage: string;
    isVisible: boolean;
    hide: boolean;
    hasInfo(): boolean;
    vm: IPopoverVm;
    isMobile(): boolean;
}