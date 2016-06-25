import {
    IPosition,
    IRuler,
    ISpace,
    ITranslateXY,
    IRectangle,
    Injectable,
    Service,
    provide
} from "../core";

@Injectable()
@Service({
    serviceName: "position",
    viewProviders: ["ruler", "space", "translateXY"]
})
export class Position implements IPosition {
        
    constructor(
        private ruler: IRuler,
        private space: ISpace,
        private translateXY: ITranslateXY) { }

    public somewhere = (a: HTMLElement, b: HTMLElement, space: number, directionPriorityList: Array<string>) => {                    
        return (this.ruler.measure({ elements: [a, b] }) as ng.IPromise<Array<IRectangle>>)
            .then((resultsArray: any) => {
                let aRectangle = (resultsArray as Array<IRectangle>)[0];
                let bRectangle = (resultsArray as Array<IRectangle>)[1];
                let widthNeeded = bRectangle.width + space;
                let heightNeeded = bRectangle.height + space;
                let resolved = false;
                for (var i = 0; i < directionPriorityList.length; i++) {
                    switch (directionPriorityList[i]) {
                        case "top":
                            if (aRectangle.top > heightNeeded && !resolved) {
                                this.translate(b, aRectangle, bRectangle, space, "above");
                                resolved = true;                                                                
                            }
                            break;
                        case "bottom":
                            if (window.innerHeight - aRectangle.bottom > heightNeeded && !resolved) {
                                this.translate(b, aRectangle, bRectangle, space, "below");
                                resolved = true;
                            }
                            break;
                        case "left":
                            if (aRectangle.left > widthNeeded && !resolved) {
                                this.translate(b, aRectangle, bRectangle, space, "left");
                                resolved = true;
                            }
                            break;
                        case "right":
                            if (window.innerWidth - aRectangle.bottom > widthNeeded && !resolved) {
                                this.translate(b, aRectangle, bRectangle, space, "right");
                                resolved = true;
                            }
                            break;
                    }
                }
            });       
    }

    public above = (a: HTMLElement, b: HTMLElement, space: number) => {
        return (this.ruler.measure({ elements: [a, b] }) as ng.IPromise<Array<IRectangle>>)
            .then((resultsArray: Array<IRectangle>) => {
                this.translate(b, resultsArray[0], resultsArray[1], space, "above");
            });
    }
    
    public below = (a: HTMLElement, b: HTMLElement, space: number) => {
        return (this.ruler.measure({ elements: [a, b] }) as ng.IPromise<Array<IRectangle>>)
            .then((resultsArray: Array<IRectangle>) => {
                this.translate(b, resultsArray[0], resultsArray[1], space, "below");                        
        });
    }

    public left = (a: HTMLElement, b: HTMLElement, space: number) => {
        return (this.ruler.measure({ elements: [a, b] }) as ng.IPromise<Array<IRectangle>>)
            .then((resultsArray: Array<IRectangle>) => {
                this.translate(b, resultsArray[0], resultsArray[1], space, "left");
            });
    }

    public right = (a: HTMLElement, b: HTMLElement, space: number) => {
        return (this.ruler.measure({ elements: [a, b] }) as ng.IPromise<Array<IRectangle>>)
            .then((resultsArray: Array<IRectangle>) => {
                this.translate(b, resultsArray[0], resultsArray[1], space, "right");
            });
    }

    private translate = (htmlElement: HTMLElement, aRectangle: IRectangle, bRectangle: IRectangle, space: number, side: string) => {
        if (side === "above")
            this.translateXY(htmlElement, aRectangle.centerX - bRectangle.radiusX, aRectangle.top - space - bRectangle.height);

        if (side === "below")
            this.translateXY(htmlElement, aRectangle.centerX - bRectangle.radiusX, aRectangle.bottom + space);

        if (side === "left")
            this.translateXY(htmlElement, aRectangle.left - space - bRectangle.width, aRectangle.centerY - bRectangle.radiusY);

        if (side === "right")
            this.translateXY(htmlElement, aRectangle.right + space, aRectangle.centerY - bRectangle.radiusY );
    }        
}


var app = angular.module("position", [
    "ruler",
    "space",
    "translateXY"
]);

provide(app, Position);

