export interface IRouteConfig {
    path: string;
    component:any
}

export interface IBootstrapOptions {
    api: string;
    loginRedirectUrl:string;
    html5Mode: boolean;
    routes: Array<IRouteConfig>;
}

export const bootstrap = (app: angular.IModule, options: IBootstrapOptions) => {
    app.config(["apiEndpointProvider", (apiEndpointProvider) => {
        apiEndpointProvider.configure(options.api);
    }]);

    app.config(["loginRedirectProvider", (loginRedirectProvider) => {
        loginRedirectProvider.setDefaultUrl(options.loginRedirectUrl);
    }]);

    app.config(["$locationProvider", ($locationProvider: angular.ILocationProvider) => {
        $locationProvider.html5Mode(options.html5Mode);
    }]);

    app.config(["$routeProvider", ($routeProvider: angular.route.IRouteProvider) => {
        for (let i = 0; i < options.routes.length; i++) {
            let path = options.routes[i].path;
            let selector = options.routes[i].component.prototype.constructor.config.selector;
            let template = `<${selector}></${selector}>`; 
            let authorizationRequired = options.routes[i].component.prototype.constructor.config.authorizationRequired; 
            ($routeProvider as any).when(path, { template: template, authorizationRequired: authorizationRequired });
        }
    }])

}