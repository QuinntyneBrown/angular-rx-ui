export const authorizationGuard = {
    route: "*",
    promise: ["loginRedirect", "$q", "$route", "invokeAsync", "store", "userActionCreator", (loginRedirect, $q: angular.IQService, $route, invokeAsync, store: any, userActionCreator: any) => {
        var deferred = $q.defer();
        invokeAsync(userActionCreator.current).then(results => {
            if ($route.current.$$route.authorizationRequired && !(store.getValue() as any).currentUser) {
                loginRedirect.redirectToLogin();
                deferred.reject()
            } else {
                deferred.resolve();
            }
        });
        return deferred.promise;
    }],
    priority: -999
};