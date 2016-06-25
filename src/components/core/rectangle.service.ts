import { Service, IRectangle, IRectangleInstanceOptions, IPoint, provide } from "../core";

@Service({
    serviceName: "rectangle"
})
export class Rectangle implements IRectangle {
    public createInstance = (options: IRectangleInstanceOptions) => {
        var instance = new Rectangle();
        if (options.clientRect) {
            instance.left = options.clientRect.left;
            instance.top = options.clientRect.top;
            instance.height = options.clientRect.height;
            instance.width = options.clientRect.width;
        } else {
            instance.left = options.left;
            instance.top = options.top;
            instance.height = options.height;
            instance.width = options.width;
        }
        return instance;
    }

    public left: number;

    public get right():number { return this.left + this.width; }

    public top: number;

    public get bottom():number { return this.top + this.height; }

    public height: number;

    public width: number;

    public get centerX(): number { return this.left + ( this.width / 2 ); }

    public get centerY(): number { return this.top + (this.height / 2); }

    public get radiusX(): number { return this.width / 2; }

    public get radiusY(): number { return this.height / 2; }

    public get middle(): IPoint { return { x: this.centerX, y: this.centerY }; }
}

var app = angular.module("rectangle", []);

provide(app, Rectangle);