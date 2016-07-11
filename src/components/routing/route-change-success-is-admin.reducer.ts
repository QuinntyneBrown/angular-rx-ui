export const routeChangeSuccessIsAdminReducer = ["$location", "$rootScope", ($location: angular.ILocationService, $rootScope: angular.IRootScopeService) => {
    $rootScope.$on("$routeChangeSuccess", () => {
        var path = $location.path();
        if (path.length >= 6 && (path.substring(0, 6) == "/admin" || path.substring(0, 6) == "/login")) {
            (<any>$rootScope).isAdmin = true;
        } else {
            (<any>$rootScope).isAdmin = false;
        }
    });
}];