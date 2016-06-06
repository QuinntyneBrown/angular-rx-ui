"use strict";
var LoginRedirectProvider = (function () {
    function LoginRedirectProvider() {
        var _this = this;
        this.loginUrl = "/login";
        this.defaultPath = "/";
        this.setLoginUrl = function (value) { return _this.loginUrl = value; };
        this.setDefaultUrl = function (value) { return _this.defaultPath = value; };
        this.$get = ["$q", "$location", function ($q, $location) {
                var _this = this;
                return {
                    responseError: function (response) {
                        if (response.status == 401) {
                            _this.lastPath = $location.path();
                            $location.path(_this.loginUrl);
                        }
                        return $q.reject(response);
                    },
                    redirectToLogin: function () {
                        _this.lastPath = $location.path();
                        $location.path(_this.loginUrl);
                    },
                    redirectPreLogin: function () {
                        if (_this.lastPath && _this.lastPath != _this.loginUrl) {
                            $location.path(_this.lastPath);
                            _this.lastPath = "";
                        }
                        else {
                            $location.path(_this.defaultPath);
                        }
                    }
                };
            }];
    }
    return LoginRedirectProvider;
}());
exports.LoginRedirectProvider = LoginRedirectProvider;
angular.module("loginRedirect", []).provider("loginRedirect", [LoginRedirectProvider])
    .config(["$httpProvider", function ($httpProvider) { return $httpProvider.interceptors.push("loginRedirect"); }]);
//# sourceMappingURL=login-redirect-provider.js.map