import { Service, ISpace, IRectangle, provide } from "../core";

@Service({
    serviceName: "space"
})
export class Space implements ISpace {
    
    public above = (spaceNeed: number, rectangle: IRectangle) => {
        return false;
    }

    public below = (spaceNeed: number, rectangle: IRectangle) => {
        return false;
    }

    public left = (spaceNeed: number, rectangle: IRectangle) => {
        return false;
    }

    public right = (spaceNeed: number, rectangle: IRectangle) => {
        return false;
    }
}


var app = angular.module("space", []);

provide(app, Space);