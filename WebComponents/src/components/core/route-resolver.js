"use strict";
var RouteResolverServiceProvider = (function () {
    function RouteResolverServiceProvider() {
        var _this = this;
        this.configure = function (routePromise) { _this._routePromises.push(routePromise); };
        this.$get = ["$injector", "$q", function ($injector, $q) {
                return {
                    resolve: function (options) {
                        _this._routeParams = options.routeParams;
                        var deferred = $q.defer();
                        var resolvedRouteData = {};
                        var routePromises = _this.getRoutePromises({ routeName: options.routeName, routeTemplate: options.routeTemplate });
                        if (routePromises.length < 1)
                            return $q.when(true);
                        var prioritizedGroups = _this.reduceRoutePromisesByPriority(routePromises);
                        _this.invoke($injector, $q, prioritizedGroups, 0, function () {
                            deferred.resolve(resolvedRouteData);
                        }, resolvedRouteData);
                        return deferred.promise;
                    }
                };
            }
        ];
        this._routePromises = [];
        /**
        * @name getRoutePromises
        * @description the route promises that will be resolved on an route
        * if the value of the route key matches the route definition '/foo/{id}' or '/foos'
        * include that routePromises
        * if the route promise has route value of '*' the promise will be resolve on every route
        * if the selector in template form ie <selector></selector>, matches the template of the route,
        * the components canActivate route promise will be resolved
        */
        this.getRoutePromises = function (options) {
            return _this._routePromises.filter(function (routePromise) {
                if (routePromise.route && routePromise.route === "*")
                    return true;
                if (routePromise.route)
                    return routePromise.route === options.routeName;
                if (routePromise.routes)
                    return routePromise.routes.indexOf(options.routeName) > -1;
                if (routePromise.routeTemplate)
                    return routePromise.routeTemplate === options.routeTemplate;
                return false;
            });
        };
        /**
         * Reduce RoutePromises into prioritized groups
         * Put the route promises with the same priority in the same group
         * Eventually will be resolve together asynchronously with $q.all
         */
        this.reduceRoutePromisesByPriority = function (routePromises) {
            var priorities = [];
            var routePromisesPrioritizedGroups = [];
            routePromises.forEach(function (promise) {
                if (priorities.indexOf(promise.priority) < 0)
                    priorities.push(promise.priority);
            });
            priorities.forEach(function (priority, index) {
                routePromisesPrioritizedGroups.push({
                    promises: routePromises.filter(function (promise) { return promise.priority == priority; }),
                    priority: priority,
                    isLast: index == priorities.length - 1
                });
            });
            return routePromisesPrioritizedGroups;
        };
        /**
         * Invoke the grouped promises. Reducing the results into the resolvedRouteData object
         * If the route promise inside the group has a key defined, the result will be attached to the
         * resolved object (routeData) using that key
         * After you reach the last group, call the callback that will resolve the object that
         * will have a key value dictionary with the results of any promises with a key defined
         */
        this.invoke = function ($injector, $q, groups, currentGroupIndex, callback, resolvedRouteData) {
            var excutedPromises = [];
            var currentGroup = groups[currentGroupIndex];
            currentGroup.promises.forEach(function (statePromise) {
                excutedPromises.push($injector.invoke(statePromise.promise));
            });
            $q.all(excutedPromises).then(function (results) {
                results.forEach(function (result, index) {
                    if (currentGroup.promises[index].key)
                        resolvedRouteData[currentGroup.promises[index].key] = results[index];
                });
                currentGroup.isLast ? callback() : _this.invoke($injector, $q, groups, currentGroupIndex + 1, callback, resolvedRouteData);
            });
        };
    }
    Object.defineProperty(RouteResolverServiceProvider.prototype, "routePromises", {
        /**
         * get route promises ordered by priority (ASC)
         * priority 1 runs before priority 10
         */
        get: function () {
            return this._routePromises.sort(function (a, b) {
                return a.priority - b.priority;
            });
        },
        enumerable: true,
        configurable: true
    });
    return RouteResolverServiceProvider;
}());
angular.module("routeResolver", [])
    .provider("routeResolverService", [RouteResolverServiceProvider]);
//# sourceMappingURL=route-resolver.js.map