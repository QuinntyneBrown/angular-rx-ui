require("./store");
var AuthInterceptor = (function () {
    function AuthInterceptor(store) {
        var _this = this;
        this.store = store;
        this.storeOnChange = function (state) { _this.token = state.token; };
        this.request = function (config) {
            if (_this.token)
                config.headers.Authorization = "Bearer " + _this.token;
            return config;
        };
        store.subscribe(function (state) { return _this.storeOnChange(state); });
    }
    AuthInterceptor.createInstance = function (store) { return new AuthInterceptor(store); };
    return AuthInterceptor;
}());
angular.module("authInterceptor", ["store"])
    .factory("authInterceptor", ["store", function (store) { return new AuthInterceptor(store); }])
    .config(["$httpProvider", function ($httpProvider) { return $httpProvider.interceptors.push("authInterceptor"); }]);
//# sourceMappingURL=auth-interceptor.js.map