import { IPosition, IRuler, ISpace, ITranslateXY, IRectangle, Injectable, Service, provide } from "../core";

@Injectable()
@Service({
    serviceName: "position",
    viewProviders: ["$q", "ruler", "space", "translateXY"]
})
export class Position implements IPosition {
        
    constructor(private $q: ng.IQService,
        private ruler: IRuler,
        private space: ISpace,
        private translateXY: ITranslateXY) { }

    public somewhere = (a: HTMLElement, b: HTMLElement, space: number, directionPriorityList: Array<string>) => {
        var deferred = this.$q.defer();        

        this.$q
            .all([this.ruler.measure(a), this.ruler.measure(b)])
            .then((resultsArray: Array<IRectangle>) => {
                let aRectangle = resultsArray[0];
                let bRectangle = resultsArray[1];
                let widthNeeded = bRectangle.width + space;
                let heightNeeded = bRectangle.height + space;
                let resolved = false;
                for (var i = 0; i < directionPriorityList.length; i++) {
                    switch (directionPriorityList[i]) {
                        case "top":
                            if (aRectangle.top > heightNeeded && !resolved) {
                                this.translate(b, aRectangle, bRectangle, space, "above");
                                resolved = true;                                
                                deferred.resolve();
                            }
                            break;
                        case "bottom":
                            if (window.innerHeight - aRectangle.bottom > heightNeeded && !resolved) {
                                this.translate(b, aRectangle, bRectangle, space, "below");
                                resolved = true;
                                deferred.resolve();                                
                            }
                            break;
                        case "left":
                            if (aRectangle.left > widthNeeded && !resolved) {
                                this.translate(b, aRectangle, bRectangle, space, "left");
                                resolved = true;
                                deferred.resolve();
                            }
                            break;
                        case "right":
                            if (window.innerWidth - aRectangle.bottom > widthNeeded && !resolved) {
                                this.translate(b, aRectangle, bRectangle, space, "right");
                                resolved = true;
                                deferred.resolve();
                            }
                            break;
                    }
                }
            });

        return deferred.promise;
    }

    public above = (a: HTMLElement, b: HTMLElement, space: number) => {
        var deferred = this.$q.defer();
        this.$q
            .all([this.ruler.measure(a), this.ruler.measure(b)])
            .then((resultsArray: Array<IRectangle>) => {
                var aRectangle = resultsArray[0];
                var bRectangle = resultsArray[1];
                this.translate(b, aRectangle, bRectangle, space, "above");
                deferred.resolve();
            });
        return deferred.promise;
    }

    public below = (a: HTMLElement, b: HTMLElement, space: number) => {
        var deferred = this.$q.defer();
        this.$q
            .all([this.ruler.measure(a),this.ruler.measure(b)])
            .then((resultsArray: Array<IRectangle>) => {
            var aRectangle = resultsArray[0];
            var bRectangle = resultsArray[1];
            this.translate(b, aRectangle, bRectangle, space, "below");            
            deferred.resolve();
        });
        return deferred.promise;
    }

    public left = (a: HTMLElement, b: HTMLElement, space: number) => {
        var deferred = this.$q.defer();
        this.$q
            .all([this.ruler.measure(a), this.ruler.measure(b)])
            .then((resultsArray: Array<IRectangle>) => {
                var aRectangle = resultsArray[0];
                var bRectangle = resultsArray[1];
                this.translate(b, aRectangle, bRectangle, space, "left");
                deferred.resolve();
            });
        return deferred.promise;
    }

    public right = (a: HTMLElement, b: HTMLElement, space: number) => {
        var deferred = this.$q.defer();
        this.$q
            .all([this.ruler.measure(a), this.ruler.measure(b)])
            .then((resultsArray: Array<IRectangle>) => {
                var aRectangle = resultsArray[0];
                var bRectangle = resultsArray[1];
                this.translate(b, aRectangle, bRectangle, space, "right");
                deferred.resolve();
            });
        return deferred.promise;
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

