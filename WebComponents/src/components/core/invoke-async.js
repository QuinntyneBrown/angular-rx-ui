"use strict";
angular.module("invokeAsync", []).value("invokeAsync", function (options) {
    var store = angular.element(document.body).injector().get("store");
    var $q = angular.element(document.body).injector().get("$q");
    if (angular.isFunction(options)) {
        options = { action: options };
    }
    ;
    var deferred = $q.defer();
    var actionId = options.params ? options.action(options.params) : options.action();
    var subscription = store.subscribe(function (state) {
        if (state.lastTriggeredByActionId == actionId) {
            if (subscription)
                subscription.dispose();
            deferred.resolve();
        }
    });
    return deferred.promise;
});
//# sourceMappingURL=invoke-async.js.map