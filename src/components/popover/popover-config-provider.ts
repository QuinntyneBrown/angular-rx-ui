import {PopoverConfig} from "./popover-config";

export class PopoverConfigProvider implements angular.IServiceProvider {
    distance: number = 10;
    placement:Array<string> = ["botton","top","left","right"]
    $get = () => new PopoverConfig(this.distance);
}


