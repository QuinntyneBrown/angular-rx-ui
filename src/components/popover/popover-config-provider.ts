import {PopoverConfig} from "./popover-config";

export class PopoverConfigProvider implements angular.IServiceProvider {
    public distance: number = 10;
    public directionPriorityList: Array<string> = ["right", "bottom", "left", "top"];
    public transitionDurationInMilliseconds: number = 300;
    $get = () => new PopoverConfig(this.directionPriorityList,this.distance, this.transitionDurationInMilliseconds);
}


