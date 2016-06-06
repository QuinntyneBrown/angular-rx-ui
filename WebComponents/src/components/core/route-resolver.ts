

export interface IRouteResolverServiceProvider extends ng.IServiceProvider {

    configure(routePromise: IRoutePromise);

    /**
    * get route promises ordered by priority (ASC)
    * priority 1 runs before priority 10
    */
    routePromises: Array<IRoutePromise>;

    /**
    * Reduce RoutePromises into prioritized groups
    * Put the route promises with the same priority in the same group
    * Eventually will be resolve together asynchronously with $q.all
    */
    reduceRoutePromisesByPriority(routePromises: IRoutePromise[]): Array<IRoutePromisesPrioritizedGroup>;
}

export interface IResolveOptions {
    routeName: string;
    routeTemplate?: string;
    routeParams?: ng.route.IRouteParamsService
}

export interface IGetRoutePromisesOptions {
    routeName: string;
    routeTemplate: string;    
}

/**
* @name IRouteResolverService
* @module App.Common
*/
export interface IRouteResolverService {
    resolve(options: IResolveOptions): ng.IPromise<any>;
}

/**
* @name IRoutePromise
* @module App.Common
*/
export interface IRoutePromise {
    routeTemplate?: string;
    priority?: number;
    route?: string;
    promise: any;
    key?: string;
    routes?: Array<string>;
}

/**
* @name IRoutePromiseInstanceOptions
* @module App.Common
*/
export interface IRoutePromiseInstanceOptions {

}

/**
* @name IRoutePromisesPrioritizedGroup
* @module App.Common
*/
export interface IRoutePromisesPrioritizedGroup {
    promises: IRoutePromise[];
    priority: number;
    isLast: boolean;
}

class RouteResolverServiceProvider implements IRouteResolverServiceProvider {

    public configure = (routePromise: IRoutePromise) => { this._routePromises.push(routePromise); }

    public $get = ["$injector", "$q", ($injector: ng.auto.IInjectorService, $q: ng.IQService) => {
        return {
            resolve: (options:IResolveOptions) => {
                this._routeParams = options.routeParams;
                let deferred = $q.defer();
                let resolvedRouteData: any = {};
                let routePromises = this.getRoutePromises({ routeName: options.routeName, routeTemplate: options.routeTemplate });

                if (routePromises.length < 1)
                    return $q.when(true);

                let prioritizedGroups = this.reduceRoutePromisesByPriority(routePromises);

                this.invoke($injector, $q, prioritizedGroups, 0, () => {
                    deferred.resolve(resolvedRouteData);
                }, resolvedRouteData);

                return deferred.promise;
            }
        }
    }
    ];

    private _routePromises: Array<IRoutePromise> = [];

    private _routeParams: angular.route.IRouteParamsService;

    /**
     * get route promises ordered by priority (ASC)
     * priority 1 runs before priority 10
     */
    public get routePromises() {
        return this._routePromises.sort((a: IRoutePromise, b: IRoutePromise) => {
            return a.priority - b.priority;
        });
    }

    /**
    * @name getRoutePromises
    * @description the route promises that will be resolved on an route
    * if the value of the route key matches the route definition '/foo/{id}' or '/foos'
    * include that routePromises
    * if the route promise has route value of '*' the promise will be resolve on every route
    * if the selector in template form ie <selector></selector>, matches the template of the route,
    * the components canActivate route promise will be resolved
    */    
    private getRoutePromises = (options: IGetRoutePromisesOptions) => 
         this._routePromises.filter((routePromise: IRoutePromise) => {

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

    /**
     * Reduce RoutePromises into prioritized groups
     * Put the route promises with the same priority in the same group
     * Eventually will be resolve together asynchronously with $q.all
     */
    public reduceRoutePromisesByPriority = (routePromises: IRoutePromise[]) => {
        let priorities: Array<number> = [];
        let routePromisesPrioritizedGroups: Array<any> = [];

        routePromises.forEach((promise) => {
            if (priorities.indexOf(promise.priority) < 0)
                priorities.push(promise.priority);
        });

        priorities.forEach((priority: number, index: number) => {
            routePromisesPrioritizedGroups.push({
                promises: routePromises.filter((promise) => { return promise.priority == priority; }),
                priority: priority,
                isLast: index == priorities.length - 1
            });
        });
        return routePromisesPrioritizedGroups;
    }

    /**
     * Invoke the grouped promises. Reducing the results into the resolvedRouteData object
     * If the route promise inside the group has a key defined, the result will be attached to the 
     * resolved object (routeData) using that key
     * After you reach the last group, call the callback that will resolve the object that 
     * will have a key value dictionary with the results of any promises with a key defined
     */
    public invoke = ($injector: ng.auto.IInjectorService, $q: ng.IQService, groups: IRoutePromisesPrioritizedGroup[], currentGroupIndex: number, callback: any, resolvedRouteData: any) => {
        let excutedPromises: Array<any> = [];
        let currentGroup = groups[currentGroupIndex];

        currentGroup.promises.forEach((statePromise: IRoutePromise) => {
            excutedPromises.push($injector.invoke(statePromise.promise));
        });

        $q.all(excutedPromises).then((results) => {
            results.forEach((result, index) => {
                if (currentGroup.promises[index].key)
                    resolvedRouteData[currentGroup.promises[index].key] = results[index];
            });
            currentGroup.isLast ? callback() : this.invoke($injector, $q, groups, currentGroupIndex + 1, callback, resolvedRouteData);
        });
    }
}
angular.module("routeResolver",[])
    .provider("routeResolverService", [RouteResolverServiceProvider]);