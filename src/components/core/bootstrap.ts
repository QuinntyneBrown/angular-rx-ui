import { provide, provideAction, provideRoutePromise } from "../core";

export interface IRouteConfig {
    path: string;
    component: any;
    authorizationRequired?: boolean;
}

export interface IBootstrapOptions {
    api?: string;
    loginRedirectUrl?: string;
    html5Mode?: boolean;
    routes?: Array<IRouteConfig>;
    providers?: Array<any>,
    components?: Array<any>,
    actions?: any,
    reducers?: any,
    run?: Array<any>;
    guards?: Array<any>;
}

export const bootstrap = (app: angular.IModule, options: IBootstrapOptions) => {

    if (options.api)
        app.config(["apiEndpointProvider", (apiEndpointProvider) => {
            apiEndpointProvider.configure(options.api);
        }]);

    if (options.loginRedirectUrl)
        app.config(["loginRedirectProvider", (loginRedirectProvider) => {
            loginRedirectProvider.setDefaultUrl(options.loginRedirectUrl);
        }]);

    if (options.html5Mode)
        app.config(["$locationProvider", ($locationProvider: angular.ILocationProvider) => {
            $locationProvider.html5Mode(options.html5Mode);
        }]);

    if (options.reducers)
        app.config(["reducersProvider", reducersProvider => {
            for (var reducer in options.reducers) { reducersProvider.configure(options.reducers[reducer]); }
        }]);

    if (options.actions)
        for (var action in options.actions) { provideAction(app, options.actions[action]); }

    if (options.components) {
        for (var i = 0; i < options.components.length; i++) {
            (app as any).component(options.components[i]);
        }
    }

    if (options.guards)
        for (var i = 0; i < options.guards.length; i++) {
            provideRoutePromise(app, options.guards[i]);
        }

    if (options.run)
        for (var i = 0; i < options.run.length; i++) {
            app.run(options.run[i]);
        }

    if (options.providers) {
        for (var i = 0; i < options.providers.length; i++) {
            provide(app, options.providers[i]);
        }
    }

    if (options.routes) {
        app.config(["$routeProvider", ($routeProvider: angular.route.IRouteProvider) => {
            for (let i = 0; i < options.routes.length; i++) {
                let path = options.routes[i].path;
                let selector = options.routes[i].component.prototype.constructor.config.selector;
                let template = `<${selector}></${selector}>`;
                let authorizationRequired = options.routes[i].authorizationRequired;
                ($routeProvider as any).when(path, { template: template, authorizationRequired: authorizationRequired });
            }
        }]);
    }

}