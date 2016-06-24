import { IPosition, IRuler, ISpace, ITranslateXY, IRectangle, Injectable, Service, provide } from "../core";

@Injectable()
@Service({
    serviceName: "position",
    viewProviders: ["$q", "ruler", "space", "translationXY"]
})
export class Position implements IPosition {
        
    constructor(private $q: ng.IQService,
        private ruler: IRuler,
        private space: ISpace,
        private translationXY: ITranslateXY) { }

    public somewhere = (a: HTMLElement, b: HTMLElement, space: number, directionPriorityList: Array<string>) => {
        var deferred = this.$q.defer();        
        return deferred.promise;
    }

    public above = (a: HTMLElement, b: HTMLElement, space: number) => {
        var deferred = this.$q.defer();
        this.$q
            .all([this.ruler.measure(a), this.ruler.measure(b)])
            .then((resultsArray: Array<IRectangle>) => {
                var aRectangle = resultsArray[0];
                var bRectangle = resultsArray[1];
                this.translationXY(b, aRectangle.centerX - bRectangle.radiusX, aRectangle.bottom + space);
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
            this.translationXY(b, aRectangle.centerX - bRectangle.radiusX, aRectangle.bottom + space);                
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
                this.translationXY(b, aRectangle.centerX - bRectangle.radiusX, aRectangle.bottom + space);
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
                this.translationXY(b, aRectangle.centerX - bRectangle.radiusX, aRectangle.bottom + space);
                deferred.resolve();
            });
        return deferred.promise;
    }

        
}


var app = angular.module("position", [
    "ruler",
    "space",
    "translateXY"
]);

provide(app, Position);

