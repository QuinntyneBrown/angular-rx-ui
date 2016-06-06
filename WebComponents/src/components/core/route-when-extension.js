"use strict";
var routeConfigs = [];
angular.module("routeWhenExtension", ["ngRoute"])
    .config(["$routeProvider", function ($routeProvider) {
        var whenFn = $routeProvider.when;
        function getTemplateUrlFromComponentName(options) {
            if (options.componentName.length > 9) {
                if (options.componentName.substr(options.componentName.length - 9) === "Component") {
                    var componentTemplateFileName = options.componentName.substr(0, options.componentName.length - 9) + ".html";
                    return "/wwwroot/components/" + componentTemplateFileName;
                }
            }
            return "";
        }
        $routeProvider.when = function () {
            if (arguments[1] && arguments[0]) {
                var routeName_1 = arguments[0];
                var routeTemplate_1 = arguments[1].template;
                arguments[1].caseInsensitiveMatch = true;
                arguments[1].templateUrl = arguments[1].componentTemplateUrl || arguments[1].templateUrl;
                arguments[1].controller = arguments[1].componentName || arguments[1].controller;
                arguments[1].controllerAs = "vm";
                arguments[1].reloadOnSearch = arguments[1].reloadOnSearch || false;
                if (arguments[1].componentName && !arguments[1].templateUrl)
                    arguments[1].templateUrl = getTemplateUrlFromComponentName({
                        moduleName: arguments[1].moduleName,
                        componentName: arguments[1].componentName
                    });
                arguments[1].resolve = arguments[1].resolve || {};
                angular.extend(arguments[1].resolve, {
                    routeData: [
                        "routeResolverService", function (routeResolverService) { return routeResolverService.resolve({ routeName: routeName_1, routeTemplate: routeTemplate_1 }); }
                    ]
                });
            }
            routeConfigs.push({
                when: arguments[0],
                config: arguments[1]
            });
            whenFn.apply($routeProvider, arguments);
            return $routeProvider;
        };
    }]);
//# sourceMappingURL=route-when-extension.js.map