var originalAngularModule = angular.module;
var componentStyles = {};
angular.module = function () {
    var m = originalAngularModule.apply(this, arguments);
    m.component = function (component) {
        var options = component.config;
        var componentNameCamelCase = options.selector.replace(/-([a-z])/g, function (g) {
            return g[1].toUpperCase();
        });
        var componentName = componentNameCamelCase + "Component";
        if (options.component.canActivate) {
            m.config(["routeResolverServiceProvider", function (routeResolverServiceProvider) {
                    routeResolverServiceProvider.configure({
                        routeTemplate: "<" + options.selector + "></" + options.selector + ">",
                        route: options.route,
                        routes: options.routes,
                        key: options.key,
                        promise: options.component.canActivate()
                    });
                }
            ]);
        }
        if (options.component.prototype.canActivate) {
            m.config(["routeResolverServiceProvider", function (routeResolverServiceProvider) {
                    routeResolverServiceProvider.configure({
                        routeTemplate: "<" + options.selector + "></" + options.selector + ">",
                        route: options.route,
                        routes: options.routes,
                        key: options.key,
                        promise: options.component.prototype.canActivate()
                    });
                }
            ]);
        }
        var directiveDefinitionObject = {
            restrict: options.restrict || "E",
            template: angular.isArray(options.template) ? options.template.join(" \n ") : options.template,
            templateUrl: options.templateUrl,
            replace: options.replace || true,
            scope: angular.isUndefined(options.scope) ? {} : options.scope,
            bindToController: options.bindToController || {},
            transclude: options.transclude,
            controllerAs: "vm",
            require: options.require,
            controller: componentName
        };
        options.component.$inject = options.viewProviders;
        if (options.inputs && options.inputs.length > 0) {
            for (var i = 0; i < options.inputs.length; i++) {
                if (options.inputs[i].substring(0, 2) === "on") {
                    directiveDefinitionObject.bindToController[options.inputs[i]] = "&";
                }
                else {
                    directiveDefinitionObject.bindToController[options.inputs[i]] = "=";
                }
            }
        }
        directiveDefinitionObject.compile = function (template) {
            return {
                pre: function (scope, element, attributes, controller, transcludeFn) {
                    if (options.transclude)
                        transcludeFn(scope, function (clone) {
                        });
                    if (document.body && angular.element(document.body.childNodes[0]) && angular.element(document.body.childNodes[0]).injector()) {
                        var $injector = angular.element(document.body.childNodes[0]).injector();
                        var store = $injector.get("store");
                        var safeDigest = $injector.get("safeDigest");
                        if (scope.vm && scope.vm.storeOnChange) {
                            var subscription = store.subscribe(function (state) {
                                scope.vm.storeOnChange(state);
                                safeDigest(scope);
                            });
                            scope.$on("$destroy", function () { return subscription.dispose(); });
                        }
                    }
                },
                post: function (scope, element, attributes, controller) {
                    var getHtml = function (who, deep) {
                        if (!who || !who.tagName)
                            return '';
                        var txt, ax, el = document.createElement("div");
                        el.appendChild(who.cloneNode(false));
                        txt = el.innerHTML;
                        if (deep) {
                            ax = txt.indexOf('>') + 1;
                            txt = txt.substring(0, ax) + who.innerHTML + txt.substring(ax);
                        }
                        el = null;
                        return txt;
                    };
                    if (options.require) {
                        var requiredComponentName = options.require.replace("^", "");
                        scope.vm[requiredComponentName] = controller;
                    }
                    if (options.transclude && scope.vm.$transclude)
                        scope.vm.$transclude(scope.$new(), function (clone) {
                            scope.vm.template = template;
                            if (template[0].nodeType === 1)
                                var documentFragment = angular.element("<div></div>");
                            for (var i = 0; i < clone[0].children[0].children.length; i++) {
                                documentFragment.append(clone[0].children[0].children[i]);
                            }
                            scope.vm.clone = getHtml(documentFragment[0], true);
                        });
                    if (scope.vm && scope.vm.ngOnInit)
                        scope.vm.ngOnInit();
                    if (scope.vm.ngOnDestroy)
                        scope.$on("$destroy", function () {
                            scope.vm.dispose();
                        });
                }
            };
        };
        m.directive(componentNameCamelCase, [function () { return directiveDefinitionObject; }]);
        m.controller(componentName, options.component);
    };
    return m;
};
//# sourceMappingURL=component-extension.js.map