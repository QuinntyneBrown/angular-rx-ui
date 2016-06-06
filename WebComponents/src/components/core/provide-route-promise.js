"use strict";
exports.provideRoutePromise = function (app, routePromise) {
    app.config(["routeResolverServiceProvider", function (routeResolverServiceProvider) {
            routeResolverServiceProvider.configure({
                route: routePromise.route,
                routes: routePromise.routes,
                key: routePromise.key,
                promise: routePromise.promise
            });
        }]);
};
//# sourceMappingURL=provide-route-promise.js.map