export interface IBootstrapOptions {
    api: string;
    loginRedirectUrl:string;
    html5Mode: boolean;
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

}