import { IRoutePromise } from "./route-resolver";

export var provideRoutePromise
    = (app: angular.IModule, routePromise: IRoutePromise) => {
        app.config(["routeResolverServiceProvider", function (routeResolverServiceProvider) {
            routeResolverServiceProvider.configure({
                route: routePromise.route,
                routes: routePromise.routes,
                key: routePromise.key,
                promise: routePromise.promise
            });
        }]);
    }