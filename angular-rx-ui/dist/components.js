/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../node_modules/rx/ts/rx.all.d.ts" />
	__webpack_require__(1);
	__webpack_require__(21);
	__webpack_require__(23);
	__webpack_require__(33);
	__webpack_require__(50);
	var app = angular
	    .module("components", [
	    "app.carousel",
	    "app.core",
	    "app.counter",
	    "app.modal"
	]);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core = __webpack_require__(2);
	window.core = core;
	__webpack_require__(4);
	__webpack_require__(3);
	__webpack_require__(10);
	__webpack_require__(13);
	__webpack_require__(16);
	__webpack_require__(18);
	__webpack_require__(19);
	__webpack_require__(20);
	__webpack_require__(17);
	var coreApp = angular.module("app.core", [
	    "ngSanitize",
	    "localStorageManager",
	    "store",
	    "addOrUpdate",
	    "getX",
	    "invokeAsync",
	    "fetch",
	    "safeDigest",
	    "translateX"
	]);


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(3));
	__export(__webpack_require__(5));
	__export(__webpack_require__(6));
	__export(__webpack_require__(7));
	__export(__webpack_require__(8));
	__export(__webpack_require__(9));
	__export(__webpack_require__(10));
	__export(__webpack_require__(11));
	__export(__webpack_require__(12));
	__export(__webpack_require__(13));
	__export(__webpack_require__(14));
	__export(__webpack_require__(15));
	__export(__webpack_require__(16));
	__export(__webpack_require__(17));


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(4));
	var InitialStateProvider = (function () {
	    function InitialStateProvider() {
	        var _this = this;
	        this.configure = function (value) { return _this.initialState = value; };
	        this.$get = function () { return _this.initialState; };
	    }
	    return InitialStateProvider;
	}());
	exports.InitialStateProvider = InitialStateProvider;
	var ReducersProvider = (function () {
	    function ReducersProvider() {
	        var _this = this;
	        this.reducers = [];
	        this.configure = function (value) { return _this.reducers.push(value); };
	        this.$get = function () { return _this.reducers; };
	    }
	    return ReducersProvider;
	}());
	exports.ReducersProvider = ReducersProvider;
	exports.functionName = function (fun) {
	    var ret = fun.toString();
	    ret = ret.substr('function '.length);
	    ret = ret.substr(0, ret.indexOf('('));
	    return ret;
	};
	var Store = (function (_super) {
	    __extends(Store, _super);
	    function Store(dispatcher, initialState, localStorageManager, reducers) {
	        var _this = this;
	        _super.call(this, initialState || {});
	        this.localStorageManager = localStorageManager;
	        this.reducers = reducers;
	        this.onDispatcherNext = function (action) {
	            _this.state = _this.state || {};
	            _this.state = _this.setLastTriggeredByActionId(_this.state, action);
	            for (var i = 0; i < _this.reducers.length; i++) {
	                _this.state = _this.reducers[i](_this.state, action);
	            }
	            _this.localStorageManager.put({ name: "initialState", value: _this.state });
	            _this.onNext(_this.state);
	        };
	        this.setLastTriggeredByActionId = function (state, action) {
	            state.lastTriggeredByActionId = action.id;
	            state.lastTriggeredByAction = action;
	            state.lastTriggeredByActionType = action.constructor.type;
	            return state;
	        };
	        this.functionToString = function (fn) {
	            return fn.toString();
	        };
	        this.state = initialState || {};
	        dispatcher.subscribe(function (action) { return _this.onDispatcherNext(action); });
	    }
	    return Store;
	}(Rx.BehaviorSubject));
	exports.Store = Store;
	function guid() {
	    function s4() {
	        return Math.floor((1 + Math.random()) * 0x10000)
	            .toString(16)
	            .substring(1);
	    }
	    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
	        s4() + '-' + s4() + s4() + s4();
	}
	exports.guid = guid;
	var Dispatcher = (function (_super) {
	    __extends(Dispatcher, _super);
	    function Dispatcher() {
	        var _this = this;
	        _super.call(this);
	        this.dispatch = function (action) { return _this.onNext(action); };
	    }
	    return Dispatcher;
	}(Rx.Subject));
	exports.Dispatcher = Dispatcher;
	angular.module("store", [])
	    .service("store", ["dispatcher", "initialState", "localStorageManager", "reducers", Store])
	    .service("dispatcher", [Dispatcher])
	    .provider("reducers", ReducersProvider)
	    .provider("initialState", InitialStateProvider)
	    .value("guid", guid)
	    .run(["store", function (store) { }]);


/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";
	var LocalStorageManagerProvider = (function () {
	    function LocalStorageManagerProvider() {
	        var _this = this;
	        this.id = "2fcfe918-dc2c-42db-9e88-ee62417651de";
	        this._items = null;
	        this.get = function (options) {
	            var storageItem = null;
	            for (var i = 0; i < _this.items.length; i++) {
	                if (options.name === _this.items[i].name)
	                    storageItem = _this.items[i].value;
	            }
	            return storageItem;
	        };
	        this.put = function (options) {
	            var itemExists = false;
	            _this.items.forEach(function (item) {
	                if (options.name === item.name) {
	                    itemExists = true;
	                    item.value = options.value;
	                }
	            });
	            if (!itemExists) {
	                var items = _this.items;
	                items.push({ name: options.name, value: options.value });
	                _this.items = items;
	                items = null;
	            }
	        };
	        this.clear = function () {
	            _this._items = [];
	        };
	        this.$get = function () { return _this; };
	        try {
	            window.onbeforeunload = function () { return localStorage.setItem(_this.id, JSON.stringify(_this.items)); };
	        }
	        catch (e) {
	        }
	    }
	    Object.defineProperty(LocalStorageManagerProvider.prototype, "items", {
	        get: function () {
	            if (this._items === null) {
	                var storageItems = localStorage.getItem(this.id);
	                if (storageItems === "null") {
	                    storageItems = null;
	                }
	                this._items = JSON.parse(storageItems || "[]");
	            }
	            return this._items;
	        },
	        set: function (value) {
	            this._items = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    return LocalStorageManagerProvider;
	}());
	exports.LocalStorageManagerProvider = LocalStorageManagerProvider;
	angular.module("localStorageManager", []).provider("localStorageManager", LocalStorageManagerProvider);


/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";
	function Action(config) {
	    if (config === void 0) { config = {}; }
	    return function (cls) {
	        cls.type = config.type;
	    };
	}
	exports.Action = Action;


/***/ },
/* 6 */
/***/ function(module, exports) {

	"use strict";
	exports.pluckOut = function (options) {
	    for (var i = 0; i < options.items.length; i++) {
	        if (options.value == options.items[i][options.key || "id"]) {
	            options.items.splice(i, 1);
	        }
	    }
	    return options.items;
	};


/***/ },
/* 7 */
/***/ function(module, exports) {

	"use strict";
	/**
	 * Describes within the change detector which strategy will be used the next time change
	 * detection is triggered.
	 */
	(function (ChangeDetectionStrategy) {
	    /**
	     * `CheckedOnce` means that after calling detectChanges the mode of the change detector
	     * will become `Checked`.
	     */
	    ChangeDetectionStrategy[ChangeDetectionStrategy["CheckOnce"] = 0] = "CheckOnce";
	    /**
	     * `Checked` means that the change detector should be skipped until its mode changes to
	     * `CheckOnce`.
	     */
	    ChangeDetectionStrategy[ChangeDetectionStrategy["Checked"] = 1] = "Checked";
	    /**
	     * `CheckAlways` means that after calling detectChanges the mode of the change detector
	     * will remain `CheckAlways`.
	     */
	    ChangeDetectionStrategy[ChangeDetectionStrategy["CheckAlways"] = 2] = "CheckAlways";
	    /**
	     * `Detached` means that the change detector sub tree is not a part of the main tree and
	     * should be skipped.
	     */
	    ChangeDetectionStrategy[ChangeDetectionStrategy["Detached"] = 3] = "Detached";
	    /**
	     * `OnPush` means that the change detector's mode will be set to `CheckOnce` during hydration.
	     */
	    ChangeDetectionStrategy[ChangeDetectionStrategy["OnPush"] = 4] = "OnPush";
	    /**
	     * `Default` means that the change detector's mode will be set to `CheckAlways` during hydration.
	     */
	    ChangeDetectionStrategy[ChangeDetectionStrategy["Default"] = 5] = "Default";
	})(exports.ChangeDetectionStrategy || (exports.ChangeDetectionStrategy = {}));
	var ChangeDetectionStrategy = exports.ChangeDetectionStrategy;


/***/ },
/* 8 */
/***/ function(module, exports) {

	"use strict";
	function Component(config) {
	    if (config === void 0) { config = {}; }
	    return function (cls) {
	        config.component = cls;
	        cls.config = config;
	    };
	}
	exports.Component = Component;
	function CanActivate(fnDefinition) {
	    return function (cls) {
	        cls.prototype.canActivate = function () {
	            return fnDefinition;
	        };
	    };
	}
	exports.CanActivate = CanActivate;


/***/ },
/* 9 */
/***/ function(module, exports) {

	"use strict";
	function Service(config) {
	    if (config === void 0) { config = {}; }
	    return function (cls) {
	        cls.serviceName = config.serviceName;
	        cls.$inject = config.viewProviders;
	    };
	}
	exports.Service = Service;


/***/ },
/* 10 */
/***/ function(module, exports) {

	"use strict";
	exports.addOrUpdate = function (options) {
	    var exists = false;
	    options.items = options.items || [];
	    for (var i = 0; i < options.items.length; i++) {
	        if (options.items[i].id === options.item.id) {
	            options.items[i] = options.item;
	            exists = true;
	        }
	    }
	    if (!exists) {
	        options.items.push(options.item);
	    }
	};
	angular.module("addOrUpdate", []).value("addOrUpdate", exports.addOrUpdate);


/***/ },
/* 11 */
/***/ function(module, exports) {

	"use strict";
	var BaseActionCreator = (function () {
	    function BaseActionCreator($location, service, dispatcher, guid, addOrUpdateAction, allAction, removeAction, setCurrentAction) {
	        var _this = this;
	        this.$location = $location;
	        this.service = service;
	        this.dispatcher = dispatcher;
	        this.guid = guid;
	        this.addOrUpdateAction = addOrUpdateAction;
	        this.allAction = allAction;
	        this.removeAction = removeAction;
	        this.setCurrentAction = setCurrentAction;
	        this.getById = function (options) {
	            var newId = _this.guid();
	            _this.service.getById({ id: options.id }).then(function (results) {
	                var action = new _this.addOrUpdateAction(newId, results);
	                _this.dispatcher.dispatch(action);
	            });
	            return newId;
	        };
	        this.all = function () {
	            var newId = _this.guid();
	            _this.service.get().then(function (results) {
	                var action = new _this.allAction(newId, results);
	                _this.dispatcher.dispatch(action);
	            });
	            return newId;
	        };
	        this.addOrUpdate = function (options) {
	            var newId = _this.guid();
	            _this.service.add({ data: options.data }).then(function (results) {
	                var action = new _this.addOrUpdateAction(newId, results);
	                _this.dispatcher.dispatch(action);
	            });
	            return newId;
	        };
	        this.remove = function (options) {
	            var newId = _this.guid();
	            _this.service.remove({
	                id: options.entity.id
	            }).then(function (results) {
	                _this.dispatcher.dispatch(new _this.removeAction(newId, options.entity));
	            });
	            return newId;
	        };
	        this.edit = function (options) { return _this.dispatcher.dispatch(new _this.setCurrentAction(options.entity)); };
	        this.create = function () { return _this.dispatcher.dispatch(new _this.setCurrentAction(null)); };
	    }
	    return BaseActionCreator;
	}());
	exports.BaseActionCreator = BaseActionCreator;


/***/ },
/* 12 */
/***/ function(module, exports) {

	"use strict";
	/**
	 * Defines template and style encapsulation options available for Component's {@link View}.
	 *
	 * See {@link ViewMetadata#encapsulation}.
	 */
	(function (ViewEncapsulation) {
	    /**
	     * Emulate `Native` scoping of styles by adding an attribute containing surrogate id to the Host
	     * Element and pre-processing the style rules provided via
	     * {@link ViewMetadata#styles} or {@link ViewMetadata#stylesUrls}, and adding the new Host Element
	     * attribute to all selectors.
	     *
	     * This is the default option.
	     */
	    ViewEncapsulation[ViewEncapsulation["Emulated"] = 0] = "Emulated";
	    /**
	     * Use the native encapsulation mechanism of the renderer.
	     *
	     * For the DOM this means using [Shadow DOM](https://w3c.github.io/webcomponents/spec/shadow/) and
	     * creating a ShadowRoot for Component's Host Element.
	     */
	    ViewEncapsulation[ViewEncapsulation["Native"] = 1] = "Native";
	    /**
	     * Don't provide any template or style encapsulation.
	     */
	    ViewEncapsulation[ViewEncapsulation["None"] = 2] = "None";
	})(exports.ViewEncapsulation || (exports.ViewEncapsulation = {}));
	var ViewEncapsulation = exports.ViewEncapsulation;


/***/ },
/* 13 */
/***/ function(module, exports) {

	"use strict";
	var Fetch = (function () {
	    function Fetch($http, $q, localStorageManager) {
	        var _this = this;
	        this.$http = $http;
	        this.$q = $q;
	        this.localStorageManager = localStorageManager;
	        this.inMemoryCache = {};
	        this.fromService = function (options) {
	            var deferred = _this.$q.defer();
	            _this.$http({ method: options.method, url: options.url, data: options.data, params: options.params, headers: options.headers }).then(function (results) {
	                deferred.resolve(results);
	            }).catch(function (error) {
	                deferred.reject(error);
	            });
	            return deferred.promise;
	        };
	        this.fromCacheOrService = function (options) {
	            var deferred = _this.$q.defer();
	            var cachedData = _this.localStorageManager.get({ name: options.url });
	            if (!cachedData) {
	                _this.fromService(options).then(function (results) {
	                    deferred.resolve(results);
	                }).catch(function (error) {
	                    deferred.reject(error);
	                });
	            }
	            else {
	                deferred.resolve(cachedData.value);
	            }
	            return deferred.promise;
	        };
	    }
	    Object.defineProperty(Fetch.prototype, "bodyNativeElement", {
	        get: function () {
	            return document.getElementsByTagName("body")[0];
	        },
	        enumerable: true,
	        configurable: true
	    });
	    return Fetch;
	}());
	exports.Fetch = Fetch;
	angular.module("fetch", ["localStorageManager"]).service("fetch", ["$http", "$q", "localStorageManager", Fetch]);


/***/ },
/* 14 */
/***/ function(module, exports) {

	"use strict";
	exports.provide = function (app, service) { return app.service(service.serviceName, service.$inject.concat([service])); };


/***/ },
/* 15 */
/***/ function(module, exports) {

	"use strict";
	exports.provideAction = function (app, value) {
	    app.value(value.type, value);
	};


/***/ },
/* 16 */
/***/ function(module, exports) {

	"use strict";
	exports.getX = function (element) {
	    var transform = angular.element(element).css("transform");
	    if (transform === "none")
	        return 0;
	    var result = JSON.parse(transform.replace(/^\w+\(/, "[").replace(/\)$/, "]"));
	    return JSON.parse(transform.replace(/^\w+\(/, "[").replace(/\)$/, "]"))[4];
	};
	angular.module("getX", []).value("getX", exports.getX);


/***/ },
/* 17 */
/***/ function(module, exports) {

	"use strict";
	exports.translateX = function (element, value) {
	    angular.element(element).css({
	        "-moz-transform": "translateX(" + value + "px)",
	        "-webkit-transform": "translateX(" + value + "px)",
	        "-ms-transform": "translateX(" + value + "px)",
	        "-transform": "translateX(" + value + "px)"
	    });
	    return element;
	};
	angular.module("translateX", []).value("translateX", exports.translateX);


/***/ },
/* 18 */
/***/ function(module, exports) {

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


/***/ },
/* 19 */
/***/ function(module, exports) {

	var originalAngularModule = angular.module;
	var componentStyles = {};
	angular.module = function () {
	    var m = originalAngularModule.apply(this, arguments);
	    m.component = function (component) {
	        var options = component.config;
	        var styles;
	        if (options.selector) {
	            var componentNameCamelCase = options.selector.replace(/-([a-z])/g, function (g) {
	                return g[1].toUpperCase();
	            });
	        }
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
	            controller: componentNameCamelCase + "Component"
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
	        if ((options.component && options.component.styles) || options.styles) {
	            styles = options.styles ? options.styles : options.component.styles;
	            styles = angular.isArray(styles) ? styles.join(" \n ") : styles;
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
	                        var componentName = options.require.replace("^", "");
	                        scope.vm[componentName] = controller;
	                    }
	                    if (options.transclude && scope.vm.$transclude)
	                        scope.vm.$transclude(scope.$new(), function (clone) {
	                            scope.vm.template = template;
	                            if (template[0].nodeType === 1)
	                                var documentFragment = angular.element("<div></div>");
	                            for (var i = 0; i < clone.length; i++) {
	                                documentFragment.append(clone[i]);
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
	        m.controller(options.componentName ? options.componentName : componentNameCamelCase + "Component", options.component);
	    };
	    return m;
	};


/***/ },
/* 20 */
/***/ function(module, exports) {

	angular.module("safeDigest", []).value("safeDigest", function (scope) {
	    if (!scope.$$phase && (scope.$root && !scope.$root.$$phase))
	        scope.$digest();
	});


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	__webpack_require__(1);
	var core_1 = __webpack_require__(2);
	var backdrop_service_1 = __webpack_require__(22);
	var app = angular.module("app.backdrop", [
	    "app.core"
	]);
	core_1.provide(app, backdrop_service_1.Backdrop);
	app.run(["backdrop", function (backdrop) { }]);


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(2);
	var Backdrop = (function () {
	    function Backdrop($q, appendToBodyAsync, extendCssAsync, removeElement, setOpacityAsync) {
	        var _this = this;
	        this.$q = $q;
	        this.appendToBodyAsync = appendToBodyAsync;
	        this.extendCssAsync = extendCssAsync;
	        this.removeElement = removeElement;
	        this.setOpacityAsync = setOpacityAsync;
	        this.createInstance = function (options) {
	            var instance = new Backdrop(_this.$q, _this.appendToBodyAsync, _this.extendCssAsync, _this.removeElement, _this.setOpacityAsync);
	            return instance;
	        };
	        this.openAsync = function () {
	            var deferred = _this.$q.defer();
	            _this.initializeAsync()
	                .then(_this.appendBackDropToBodyAsync)
	                .then(_this.showAsync)
	                .then(function () {
	                _this.isOpen = true;
	                deferred.resolve();
	            });
	            return deferred.promise;
	        };
	        this.closeAsync = function () {
	            var deferred = _this.$q.defer();
	            _this.hideAsync().then(function (results) {
	                _this.dispose();
	                _this.isOpen = false;
	                deferred.resolve();
	            });
	            return deferred.promise;
	        };
	        this.initializeAsync = function () {
	            var deferred = _this.$q.defer();
	            _this.augmentedJQuery = angular.element("<div></div>");
	            _this.extendCssAsync({
	                nativeHTMLElement: _this.nativeHTMLElement,
	                cssObject: {
	                    "-webkit-transition": "opacity 300ms ease-in-out",
	                    "-o-transition": "opacity 300ms ease-in-out",
	                    "transition": "opacity 300ms ease-in-out",
	                    "opacity": "0",
	                    "position": "fixed",
	                    "top": "0",
	                    "left": "0",
	                    "height": "100%",
	                    "width": "100%",
	                    "background-color": "rgba(0, 0, 0, .25)",
	                    "display": "block"
	                }
	            }).then(function () {
	                deferred.resolve();
	            });
	            return deferred.promise;
	        };
	        this.showAsync = function () {
	            return _this.setOpacityAsync({ nativeHtmlElement: _this.nativeHTMLElement, opacity: 25 });
	        };
	        this.appendBackDropToBodyAsync = function () {
	            return _this.appendToBodyAsync({ nativeElement: _this.nativeHTMLElement });
	        };
	        this.hideAsync = function () {
	            return _this.setOpacityAsync({ nativeHtmlElement: _this.nativeHTMLElement, opacity: 0 });
	        };
	        this.dispose = function () {
	            _this.removeElement({ nativeHTMLElement: _this.nativeHTMLElement });
	            _this.augmentedJQuery = null;
	        };
	        this.isOpen = false;
	        this.isAnimating = false;
	    }
	    Object.defineProperty(Backdrop.prototype, "nativeHTMLElement", {
	        get: function () { return this.augmentedJQuery[0]; },
	        enumerable: true,
	        configurable: true
	    });
	    Backdrop = __decorate([
	        core_1.Service({
	            serviceName: "backdrop",
	            viewProviders: ["$q", "appendToBodyAsync", "extendCssAsync", "removeElement", "setOpacityAsync"]
	        }), 
	        __metadata('design:paramtypes', [Object, Object, Object, Object, Object])
	    ], Backdrop);
	    return Backdrop;
	}());
	exports.Backdrop = Backdrop;


/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	__webpack_require__(1);
	var core_1 = __webpack_require__(2);
	var counter_component_1 = __webpack_require__(24);
	var counter_action_creator_1 = __webpack_require__(25);
	var actions = __webpack_require__(26);
	var reducers = __webpack_require__(32);
	var app = angular.module("app.counter", [
	    "app.core"
	]);
	core_1.provide(app, counter_action_creator_1.CounterActionCreator);
	app.component(counter_component_1.CounterComponent);
	for (var action in actions) {
	    core_1.provideAction(app, actions[action]);
	}
	app.config(["reducersProvider", function (reducersProvider) {
	        for (var reducer in reducers) {
	            reducersProvider.configure(reducers[reducer]);
	        }
	    }]);


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(2);
	var counter_action_creator_1 = __webpack_require__(25);
	var CounterComponent = (function () {
	    function CounterComponent(counterActionCreator) {
	        var _this = this;
	        this.counterActionCreator = counterActionCreator;
	        this.storeOnChange = function (store) { return _this.count = store.count; };
	        this.increment = function () { return _this.counterActionCreator.increment(); };
	        this.decrement = function () { return _this.counterActionCreator.decrement(); };
	        this.count = 0;
	    }
	    CounterComponent = __decorate([
	        core_1.Component({
	            template: __webpack_require__(27),
	            styles: [__webpack_require__(28)],
	            selector: "counter",
	            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
	            viewProviders: ["counterActionCreator"]
	        }), 
	        __metadata('design:paramtypes', [counter_action_creator_1.CounterActionCreator])
	    ], CounterComponent);
	    return CounterComponent;
	}());
	exports.CounterComponent = CounterComponent;


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(2);
	var counter_actions_1 = __webpack_require__(26);
	var CounterActionCreator = (function () {
	    function CounterActionCreator(dispatcher, guid) {
	        var _this = this;
	        this.dispatcher = dispatcher;
	        this.guid = guid;
	        this.increment = function () { return _this.dispatcher.dispatch(new counter_actions_1.Increment()); };
	        this.decrement = function () { return _this.dispatcher.dispatch(new counter_actions_1.Decrement()); };
	    }
	    CounterActionCreator = __decorate([
	        core_1.Service({
	            serviceName: "counterActionCreator",
	            viewProviders: ["dispatcher", "guid"]
	        }), 
	        __metadata('design:paramtypes', [Object, Object])
	    ], CounterActionCreator);
	    return CounterActionCreator;
	}());
	exports.CounterActionCreator = CounterActionCreator;


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(2);
	var Increment = (function () {
	    function Increment() {
	    }
	    Increment = __decorate([
	        core_1.Action({
	            type: "counter.increment"
	        }), 
	        __metadata('design:paramtypes', [])
	    ], Increment);
	    return Increment;
	}());
	exports.Increment = Increment;
	var Decrement = (function () {
	    function Decrement() {
	    }
	    Decrement = __decorate([
	        core_1.Action({
	            type: "counter.decrement"
	        }), 
	        __metadata('design:paramtypes', [])
	    ], Decrement);
	    return Decrement;
	}());
	exports.Decrement = Decrement;


/***/ },
/* 27 */
/***/ function(module, exports) {

	module.exports = "<div class=\"counter\">\r\n    <h1>{{ vm.count }}</h1>\r\n\r\n    <a data-ng-click=\"vm.increment()\">Increment</a>\r\n\r\n    <a data-ng-click=\"vm.decrement()\">Decrement</a>\r\n</div>"

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(29);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(31)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./counter.component.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./counter.component.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(30)();
	// imports


	// module
	exports.push([module.id, ".counter a {\n  color: red; }\n", ""]);

	// exports


/***/ },
/* 30 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var actions = __webpack_require__(26);
	exports.counterReducer = function (state, action) {
	    state.count = state.count || 0;
	    if (action instanceof actions.Increment)
	        state.count = state.count + 1;
	    if (action instanceof actions.Decrement)
	        state.count = state.count - 1;
	    return state;
	};


/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	__webpack_require__(1);
	__webpack_require__(21);
	var core_1 = __webpack_require__(2);
	var modal_action_creator_1 = __webpack_require__(34);
	var modal_service_1 = __webpack_require__(36);
	var reducers = __webpack_require__(37);
	var actions = __webpack_require__(35);
	var modal_component_1 = __webpack_require__(38);
	var modal_title_component_1 = __webpack_require__(42);
	var modal_content_component_1 = __webpack_require__(46);
	var app = angular.module("app.modal", [
	    "app.core",
	    "app.backdrop"
	]);
	core_1.provide(app, modal_action_creator_1.ModalActionCreator);
	core_1.provide(app, modal_service_1.Modal);
	app.component(modal_component_1.ModalComponent);
	app.component(modal_title_component_1.ModalTitleComponent);
	app.component(modal_content_component_1.ModalContentComponent);
	app.config(["reducersProvider", function (reducersProvider) {
	        for (var reducer in reducers) {
	            reducersProvider.configure(reducers[reducer]);
	        }
	    }]);
	for (var action in actions) {
	    core_1.provideAction(app, actions[action]);
	}
	app.run(["modal", "modalActionCreator", function (modal, modalActionCreator) { }]);


/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var modal_actions_1 = __webpack_require__(35);
	var core_1 = __webpack_require__(2);
	var ModalActionCreator = (function () {
	    function ModalActionCreator($rootScope, dispatcher) {
	        var _this = this;
	        this.$rootScope = $rootScope;
	        this.dispatcher = dispatcher;
	        this.open = function (options) { return _this.dispatcher.dispatch(new modal_actions_1.OpenModalAction(options.html)); };
	        this.close = function () { return _this.dispatcher.dispatch(new modal_actions_1.CloseModalAction()); };
	        $rootScope.$on("$routeChangeSuccess", this.close);
	    }
	    ModalActionCreator = __decorate([
	        core_1.Service({
	            serviceName: "modalActionCreator",
	            viewProviders: ["$rootScope", "dispatcher"]
	        }), 
	        __metadata('design:paramtypes', [Object, Object])
	    ], ModalActionCreator);
	    return ModalActionCreator;
	}());
	exports.ModalActionCreator = ModalActionCreator;


/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(2);
	var OpenModalAction = (function () {
	    function OpenModalAction(html) {
	        this.html = html;
	    }
	    OpenModalAction = __decorate([
	        core_1.Action({
	            type: "modal.openModalAction"
	        }), 
	        __metadata('design:paramtypes', [Object])
	    ], OpenModalAction);
	    return OpenModalAction;
	}());
	exports.OpenModalAction = OpenModalAction;
	var CloseModalAction = (function () {
	    function CloseModalAction() {
	    }
	    CloseModalAction = __decorate([
	        core_1.Action({
	            type: "modal.closeModalAction"
	        }), 
	        __metadata('design:paramtypes', [])
	    ], CloseModalAction);
	    return CloseModalAction;
	}());
	exports.CloseModalAction = CloseModalAction;


/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(2);
	var Modal = (function () {
	    function Modal($compile, $q, $rootScope, appendToBodyAsync, backdrop, extendCssAsync, removeElement, setOpacityAsync, store) {
	        var _this = this;
	        this.$compile = $compile;
	        this.$q = $q;
	        this.$rootScope = $rootScope;
	        this.appendToBodyAsync = appendToBodyAsync;
	        this.backdrop = backdrop;
	        this.extendCssAsync = extendCssAsync;
	        this.removeElement = removeElement;
	        this.setOpacityAsync = setOpacityAsync;
	        this.store = store;
	        this.storeOnChange = function (state) {
	            _this.html = state.modalHtml;
	            _this.isOpen = state.modalOpen;
	        };
	        this._isOpen = false;
	        this.openAsync = function () {
	            var openAsyncFn = function () {
	                return _this.initializeAsync()
	                    .then(_this.backdrop.openAsync)
	                    .then(_this.appendModalToBodyAsync)
	                    .then(_this.showAsync);
	            };
	            setTimeout(openAsyncFn, 100);
	        };
	        this.initializeAsync = function () {
	            var deferred = _this.$q.defer();
	            _this.compileAsync().then(function () {
	                _this.nativeElement = _this.augmentedJQuery[0];
	                _this.extendCssAsync({
	                    nativeHTMLElement: _this.nativeElement,
	                    cssObject: {
	                        "opacity": "0",
	                        "position": "fixed",
	                        "margin-top": "-300px",
	                        "top": "0",
	                        "left": "0",
	                        "background-color": "#FFF",
	                        "display": "block",
	                        "z-index": "999",
	                        "width": "100%",
	                        "padding": "30px",
	                        "transition": "all 0.5s",
	                        "-webkit-transition": "all 0.5s",
	                        "-o-transition": "all 0.5s"
	                    }
	                }).then(function () {
	                    deferred.resolve();
	                });
	            });
	            return deferred.promise;
	        };
	        this.compileAsync = function () {
	            var deferred = _this.$q.defer();
	            _this.$scope = _this.$rootScope.$new();
	            _this.augmentedJQuery = _this.$compile(angular.element(_this.html))(_this.$scope);
	            setTimeout(function () {
	                _this.$scope.$digest();
	                deferred.resolve();
	            }, 100);
	            return deferred.promise;
	        };
	        this.appendModalToBodyAsync = function () { return _this.appendToBodyAsync({ nativeElement: _this.nativeElement }); };
	        this.showAsync = function () { return _this.extendCssAsync({
	            nativeHTMLElement: _this.nativeElement,
	            cssObject: {
	                "opacity": "100",
	                "margin-top": "0px",
	            }
	        }); };
	        this.closeAsync = function () {
	            if (!_this.pinned) {
	                var deferred = _this.$q.defer();
	                try {
	                    _this.extendCssAsync({
	                        nativeHTMLElement: _this.nativeElement,
	                        cssObject: {
	                            "opacity": "0",
	                        }
	                    })
	                        .then(_this.backdrop.closeAsync)
	                        .then(function () {
	                        _this.augmentedJQuery[0].parentNode.removeChild(_this.augmentedJQuery[0]);
	                        deferred.resolve();
	                    });
	                }
	                catch (error) {
	                    deferred.resolve();
	                }
	                return deferred.promise;
	            }
	        };
	        this.dispose = function () { };
	        this.togglePin = function () {
	            if (_this.pinned) {
	                _this.pinned = false;
	                _this.closeAsync();
	            }
	            else {
	                _this.pinned = true;
	            }
	        };
	        this.pinned = false;
	        store.subscribe(this.storeOnChange);
	    }
	    Object.defineProperty(Modal.prototype, "html", {
	        get: function () { return this._html; },
	        set: function (value) { this._html = value; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Modal.prototype, "isOpen", {
	        get: function () { return this._isOpen; },
	        set: function (value) {
	            if (value && !this._isOpen)
	                this.openAsync();
	            if (!value && this._isOpen)
	                this.closeAsync();
	            this._isOpen = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Modal = __decorate([
	        core_1.Service({
	            serviceName: "modal",
	            viewProviders: [
	                "$compile",
	                "$q",
	                "$rootScope",
	                "appendToBodyAsync",
	                "backdrop",
	                "extendCssAsync",
	                "removeElement",
	                "setOpacityAsync",
	                "store"]
	        }), 
	        __metadata('design:paramtypes', [Object, Object, Object, Object, Object, Object, Object, Object, core_1.Store])
	    ], Modal);
	    return Modal;
	}());
	exports.Modal = Modal;


/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var actions = __webpack_require__(35);
	exports.openModalReducer = function (state, action) {
	    if (action instanceof actions.OpenModalAction) {
	        state.modalHtml = action.html;
	        state.modalOpen = true;
	    }
	    return state;
	};
	exports.closeModalReducer = function (state, action) {
	    if (action instanceof actions.CloseModalAction) {
	        state.modalHtml = '';
	        state.modalOpen = false;
	    }
	    return state;
	};


/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(2);
	var modal_action_creator_1 = __webpack_require__(34);
	var ModalComponent = (function () {
	    function ModalComponent($attrs, $element, modalActionCreator) {
	        var _this = this;
	        this.$attrs = $attrs;
	        this.$element = $element;
	        this.modalActionCreator = modalActionCreator;
	        this.close = function () { return _this.modalActionCreator.close(); };
	    }
	    ModalComponent = __decorate([
	        core_1.Component({
	            template: __webpack_require__(39),
	            styles: [__webpack_require__(40)],
	            selector: "modal",
	            transclude: {
	                'title': '?modalTitle',
	                'content': '?modalContent'
	            },
	            viewProviders: [
	                '$attrs',
	                '$element',
	                'modalActionCreator'
	            ]
	        }), 
	        __metadata('design:paramtypes', [Object, Object, modal_action_creator_1.ModalActionCreator])
	    ], ModalComponent);
	    return ModalComponent;
	}());
	exports.ModalComponent = ModalComponent;


/***/ },
/* 39 */
/***/ function(module, exports) {

	module.exports = "<div class=\"modal\">\r\n    <h1 data-ng-click=\"vm.close()\" class=\"modal-close\">X</h1>\r\n    <div ng-transclude=\"title\"></div>\r\n    <div ng-transclude=\"content\"></div>\r\n</div>"

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(41);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(31)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./modal.component.css", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./modal.component.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(30)();
	// imports


	// module
	exports.push([module.id, ".modal-close {\r\n    cursor:pointer;\r\n}", ""]);

	// exports


/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(2);
	var modal_action_creator_1 = __webpack_require__(34);
	var ModalTitleComponent = (function () {
	    function ModalTitleComponent($attrs, modalActionCreator) {
	        this.$attrs = $attrs;
	        this.modalActionCreator = modalActionCreator;
	        this.storeOnChange = function (state) { };
	    }
	    ModalTitleComponent = __decorate([
	        core_1.Component({
	            template: __webpack_require__(43),
	            styles: [__webpack_require__(44)],
	            selector: "modal-title",
	            transclude: true,
	            viewProviders: ["$attrs", "modalActionCreator"]
	        }), 
	        __metadata('design:paramtypes', [Object, modal_action_creator_1.ModalActionCreator])
	    ], ModalTitleComponent);
	    return ModalTitleComponent;
	}());
	exports.ModalTitleComponent = ModalTitleComponent;


/***/ },
/* 43 */
/***/ function(module, exports) {

	module.exports = "<div class=\"modal-title\">\r\n    <ng-transclude></ng-transclude>\r\n</div>"

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(45);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(31)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./modal-title.component.css", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./modal-title.component.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(30)();
	// imports


	// module
	exports.push([module.id, "", ""]);

	// exports


/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(2);
	var modal_action_creator_1 = __webpack_require__(34);
	var ModalContentComponent = (function () {
	    function ModalContentComponent($attrs, modalActionCreator) {
	        this.$attrs = $attrs;
	        this.modalActionCreator = modalActionCreator;
	        this.storeOnChange = function (state) { };
	    }
	    ModalContentComponent = __decorate([
	        core_1.Component({
	            template: __webpack_require__(47),
	            styles: [__webpack_require__(48)],
	            selector: "modal-content",
	            transclude: true,
	            viewProviders: ["$attrs", "modalActionCreator"]
	        }), 
	        __metadata('design:paramtypes', [Object, modal_action_creator_1.ModalActionCreator])
	    ], ModalContentComponent);
	    return ModalContentComponent;
	}());
	exports.ModalContentComponent = ModalContentComponent;


/***/ },
/* 47 */
/***/ function(module, exports) {

	module.exports = "<div class=\"modal-content\">\r\n    <ng-transclude></ng-transclude>\r\n</div>"

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(49);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(31)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./modal-content.component.css", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./modal-content.component.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(30)();
	// imports


	// module
	exports.push([module.id, "", ""]);

	// exports


/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	__webpack_require__(1);
	var core_1 = __webpack_require__(2);
	var carousel_component_1 = __webpack_require__(51);
	var carousel_action_creator_1 = __webpack_require__(56);
	var reducers = __webpack_require__(57);
	var actions = __webpack_require__(52);
	var app = angular.module("app.carousel", [
	    "app.core"
	]);
	core_1.provide(app, carousel_action_creator_1.CarouselActionCreator);
	app.component(carousel_component_1.CarouselComponent);
	app.config(["reducersProvider", function (reducersProvider) {
	        for (var reducer in reducers) {
	            reducersProvider.configure(reducers[reducer]);
	        }
	    }]);
	for (var action in actions) {
	    core_1.provideAction(app, actions[action]);
	}


/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(2);
	var carousel_actions_1 = __webpack_require__(52);
	var CarouselComponent = (function () {
	    function CarouselComponent($attrs, $compile, $element, $injector, $scope, $transclude, getX, translateX) {
	        var _this = this;
	        this.$attrs = $attrs;
	        this.$compile = $compile;
	        this.$element = $element;
	        this.$injector = $injector;
	        this.$scope = $scope;
	        this.$transclude = $transclude;
	        this.getX = getX;
	        this.translateX = translateX;
	        this.ngOnInit = function () { return _this.initialRender(); };
	        this.storeOnChange = function (state) {
	            if (state.lastTriggeredByAction instanceof carousel_actions_1.CarouselNextAction) {
	            }
	            if (state.lastTriggeredByAction instanceof carousel_actions_1.CarouselPreviousAction) {
	            }
	        };
	        this.render = function () {
	            if (!_this.hasRendered)
	                _this.initialRender();
	        };
	        this.reRender = function () {
	            _this.translateX(_this.carouselInner, 0);
	            if (!_this.$scope.$$phase)
	                _this.$scope.$digest();
	        };
	        this.initialRender = function () {
	            var fragment = document.createDocumentFragment();
	            var nodes = [];
	            for (var i = 0; i < _this.items.length; i++) {
	                var childScope = _this.$scope.$new(true);
	                childScope[_this.itemName] = _this.items[i];
	                childScope.$$index = i;
	                var itemContent = _this.$compile(angular.element(_this.clone))(childScope);
	                fragment.appendChild(itemContent[0]);
	            }
	            _this.carouselInner.appendChild(fragment);
	            _this.hasRendered = true;
	            _this.currentIndex = 0;
	        };
	        this.getAllRenderedNodes = function (options) {
	            return [];
	        };
	        this.renderNext = function () {
	            if (!_this.inTransition) {
	                _this.inTransition = true;
	                var renderedNodes = _this.getAllRenderedNodes({ orientation: "horizontal", order: "desc" });
	                var numOfTransitions_1 = renderedNodes.length;
	                for (var i = 0; i < renderedNodes.length; i++) {
	                    var node = renderedNodes[i].node;
	                    _this.translateX(renderedNodes[i].node, _this.getX(renderedNodes[i].node) - _this.lastViewPortWidth);
	                    renderedNodes[i].node.addEventListener(_this.transitonEnd, function () {
	                        numOfTransitions_1 = numOfTransitions_1 - 1;
	                        if (numOfTransitions_1 === 0) {
	                            _this.turnOffTransitions();
	                            var renderedNodes_1 = _this.getAllRenderedNodes({ orientation: "horizontal", order: "asc" });
	                            var node_1 = renderedNodes_1[0].node;
	                            var currentLeft = node_1.offsetLeft;
	                            var desiredX = _this.lastViewPortWidth * (_this.itemsCount - 1);
	                            var delta = desiredX - currentLeft;
	                            _this.translateX(node_1, delta);
	                            setTimeout(function () {
	                                _this.inTransition = false;
	                                _this.turnOnTransitions();
	                            }, 0);
	                        }
	                    });
	                }
	            }
	        };
	        this.renderPrevious = function () {
	            if (!_this.inTransition) {
	                _this.inTransition = true;
	                _this.turnOffTransitions();
	                var renderedNodes = _this.getAllRenderedNodes({ orientation: "horizontal", order: "desc" });
	                var tailRenderedNode = renderedNodes[0];
	                var currentLeft = tailRenderedNode.node.offsetLeft;
	                var desiredX = _this.lastViewPortWidth * (-1);
	                var delta = desiredX - currentLeft;
	                _this.translateX(tailRenderedNode.node, delta);
	                setTimeout(function () {
	                    _this.turnOnTransitions();
	                    var renderedNodes = _this.getAllRenderedNodes({ orientation: "horizontal", order: "asc" });
	                    for (var i = 0; i < renderedNodes.length; i++) {
	                        var node = renderedNodes[i].node;
	                        _this.translateX(renderedNodes[i].node, _this.getX(renderedNodes[i].node) + _this.lastViewPortWidth);
	                    }
	                    _this.inTransition = false;
	                }, 0);
	            }
	        };
	        this.turnOnTransitions = function () {
	            angular.element(_this.carouselInner).addClass("notransition");
	        };
	        this.turnOffTransitions = function () {
	            angular.element(_this.carouselInner).removeClass("notransition");
	        };
	        this.items = JSON.parse(this.$attrs["props"]);
	        this.itemName = "movie";
	    }
	    Object.defineProperty(CarouselComponent.prototype, "itemsCount", {
	        get: function () {
	            return this.items.length;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(CarouselComponent.prototype, "carouselInner", {
	        get: function () { return this.$element.find(".carousel-inner")[0]; },
	        enumerable: true,
	        configurable: true
	    });
	    CarouselComponent = __decorate([
	        core_1.Component({
	            template: __webpack_require__(53),
	            styles: [__webpack_require__(54)],
	            selector: "carousel",
	            transclude: true,
	            viewProviders: [
	                "$attrs",
	                "$compile",
	                "$element",
	                "$injector",
	                "$scope",
	                "$transclude",
	                "getX",
	                "translateX"
	            ]
	        }), 
	        __metadata('design:paramtypes', [Object, Function, Object, Object, Object, Function, Object, Object])
	    ], CarouselComponent);
	    return CarouselComponent;
	}());
	exports.CarouselComponent = CarouselComponent;


/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(2);
	var CarouselNextAction = (function () {
	    function CarouselNextAction() {
	    }
	    CarouselNextAction = __decorate([
	        core_1.Action({
	            type: "carousel.nextAction"
	        }), 
	        __metadata('design:paramtypes', [])
	    ], CarouselNextAction);
	    return CarouselNextAction;
	}());
	exports.CarouselNextAction = CarouselNextAction;
	var CarouselPreviousAction = (function () {
	    function CarouselPreviousAction() {
	    }
	    CarouselPreviousAction = __decorate([
	        core_1.Action({
	            type: "carousel.previousAction"
	        }), 
	        __metadata('design:paramtypes', [])
	    ], CarouselPreviousAction);
	    return CarouselPreviousAction;
	}());
	exports.CarouselPreviousAction = CarouselPreviousAction;


/***/ },
/* 53 */
/***/ function(module, exports) {

	module.exports = "<div class=\"carousel\">\r\n    <div class=\"carousel-previous\"  data-ng-click=\"vm.previous()\"></div>\r\n    <div class=\"carousel-next\" data-ng-click=\"vm.next()\"></div>\r\n    <div class=\"carousel-inner\">\r\n\r\n    </div>\r\n</div>\r\n"

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(55);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(31)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./carousel.component.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./carousel.component.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(30)();
	// imports


	// module
	exports.push([module.id, "", ""]);

	// exports


/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(2);
	var carousel_actions_1 = __webpack_require__(52);
	var CarouselActionCreator = (function () {
	    function CarouselActionCreator(dispatcher, guid) {
	        var _this = this;
	        this.dispatcher = dispatcher;
	        this.guid = guid;
	        this.next = function () { return _this.dispatcher.dispatch(new carousel_actions_1.CarouselNextAction()); };
	        this.previous = function () { return _this.dispatcher.dispatch(new carousel_actions_1.CarouselPreviousAction()); };
	    }
	    CarouselActionCreator = __decorate([
	        core_1.Service({
	            serviceName: "carouselActionCreator",
	            viewProviders: ["dispatcher", "guid"]
	        }), 
	        __metadata('design:paramtypes', [Object, Object])
	    ], CarouselActionCreator);
	    return CarouselActionCreator;
	}());
	exports.CarouselActionCreator = CarouselActionCreator;


/***/ },
/* 57 */
/***/ function(module, exports) {

	"use strict";


/***/ }
/******/ ]);