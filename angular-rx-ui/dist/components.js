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
	__webpack_require__(30);
	__webpack_require__(42);
	__webpack_require__(70);
	__webpack_require__(78);
	__webpack_require__(80);
	__webpack_require__(88);
	__webpack_require__(96);
	__webpack_require__(107);
	__webpack_require__(122);
	__webpack_require__(130);
	__webpack_require__(139);
	__webpack_require__(147);
	__webpack_require__(156);
	__webpack_require__(168);
	__webpack_require__(176);
	var app = angular
	    .module("components", [
	    "app.ads",
	    "app.article",
	    "app.author",
	    "app.category",
	    "app.core",
	    "app.counter",
	    "app.flipCard",
	    "app.modal",
	    "app.navMenu",
	    "app.pagedList",
	    "app.picture",
	    "app.rotator",
	    "app.socialShare",
	    "app.tag",
	    "app.window"
	]);
	app.config([function () {
	        FastClick.attach(document.body);
	    }]);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(2));
	__export(__webpack_require__(3));
	__export(__webpack_require__(4));
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
	__export(__webpack_require__(18));
	__export(__webpack_require__(19));
	exports.Observable = Rx.Observable;
	angular.extend(window, Rx);
	var store_2 = __webpack_require__(4);
	var service_2 = __webpack_require__(2);
	var action_decorator_2 = __webpack_require__(6);
	var pluck_out_2 = __webpack_require__(7);
	var change_detection_strategy_2 = __webpack_require__(8);
	var component_decorators_2 = __webpack_require__(9);
	var service_decorator_2 = __webpack_require__(10);
	var add_or_update_2 = __webpack_require__(11);
	var action_creator_2 = __webpack_require__(12);
	var view_encapsulation_2 = __webpack_require__(13);
	var fetch_2 = __webpack_require__(14);
	var provide_2 = __webpack_require__(15);
	var provide_action_2 = __webpack_require__(16);
	var get_x_2 = __webpack_require__(17);
	var is_between_2 = __webpack_require__(18);
	var translate_x_2 = __webpack_require__(19);
	var core = __webpack_require__(1);
	window.core = {
	    BaseService: service_2.BaseService,
	    Store: store_2.Store,
	    Action: action_decorator_2.Action,
	    pluckOut: pluck_out_2.pluckOut,
	    ChangeDetectionStrategy: change_detection_strategy_2.ChangeDetectionStrategy,
	    CanActivate: component_decorators_2.CanActivate,
	    Component: component_decorators_2.Component,
	    Service: service_decorator_2.Service,
	    addOrUpdate: add_or_update_2.addOrUpdate,
	    BaseActionCreator: action_creator_2.BaseActionCreator,
	    ViewEncapsulation: view_encapsulation_2.ViewEncapsulation,
	    Fetch: fetch_2.Fetch,
	    provide: provide_2.provide,
	    provideAction: provide_action_2.provideAction,
	    getX: get_x_2.getX,
	    isBetween: is_between_2.isBetween,
	    translateX: translate_x_2.translateX
	};
	__webpack_require__(5);
	__webpack_require__(4);
	__webpack_require__(11);
	__webpack_require__(20);
	__webpack_require__(21);
	__webpack_require__(22);
	__webpack_require__(23);
	__webpack_require__(14);
	__webpack_require__(17);
	__webpack_require__(24);
	__webpack_require__(25);
	__webpack_require__(26);
	__webpack_require__(27);
	__webpack_require__(28);
	__webpack_require__(19);
	__webpack_require__(29);
	var coreApp = angular.module("app.core", [
	    "ngSanitize",
	    "localStorageManager",
	    "store",
	    "addOrUpdate",
	    "appendToBodyAsync",
	    "debounce",
	    "extendCssAsync",
	    "getFromUrlSync",
	    "getX",
	    "invokeAsync",
	    "fetch",
	    "removeElement",
	    "safeDigest",
	    "setOpacityAsync",
	    "translateX",
	    "translateXAsync"
	]);
	angular.extend(window, core);


/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";
	/**
	 * Base Service for CRUD: Expects a resultful endpoint available
	 */
	var BaseService = (function () {
	    function BaseService($q, apiEndpoint, fetch) {
	        this.$q = $q;
	        this.apiEndpoint = apiEndpoint;
	        this.fetch = fetch;
	    }
	    BaseService.prototype.get = function () {
	        var deferred = this.$q.defer();
	        this.fetch.fromCacheOrService({ method: "GET", url: this.baseUri + "/get" })
	            .then(function (results) { return deferred.resolve(results.data); });
	        return deferred.promise;
	    };
	    ;
	    BaseService.prototype.getById = function (options) {
	        var deferred = this.$q.defer();
	        this.fetch.fromService({ method: "GET", url: this.baseUri + "/getById", params: { id: options.id } })
	            .then(function (results) { return deferred.resolve(results.data); });
	        return deferred.promise;
	    };
	    ;
	    BaseService.prototype.add = function (options) {
	        var deferred = this.$q.defer();
	        this.fetch.fromService({ method: "POST", url: this.baseUri + "/add", data: options.data })
	            .then(function (results) { return deferred.resolve(results.data); });
	        return deferred.promise;
	    };
	    ;
	    BaseService.prototype.update = function (options) {
	        var deferred = this.$q.defer();
	        this.fetch.fromService({ method: "PUT", url: this.baseUri + "/update", data: options.data })
	            .then(function (results) { return deferred.resolve(results.data); });
	        return deferred.promise;
	    };
	    ;
	    BaseService.prototype.remove = function (options) {
	        var deferred = this.$q.defer();
	        this.fetch.fromService({ method: "DELETE", url: this.baseUri + "/remove", params: { id: options.id } })
	            .then(function (results) { return deferred.resolve(results.data); });
	        return deferred.promise;
	    };
	    ;
	    Object.defineProperty(BaseService.prototype, "baseUri", {
	        get: function () { throw new Error("Not Implemented"); },
	        enumerable: true,
	        configurable: true
	    });
	    return BaseService;
	}());
	exports.BaseService = BaseService;


/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";
	function Injectable(noop) {
	    if (noop === void 0) { noop = null; }
	    return function (cls) {
	    };
	}
	exports.Injectable = Injectable;


/***/ },
/* 4 */
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
	__export(__webpack_require__(5));
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
/* 5 */
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
/* 6 */
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
/* 7 */
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
/* 8 */
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
/* 9 */
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
/* 10 */
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
/* 11 */
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
/* 12 */
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
/* 13 */
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
/* 14 */
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
/* 15 */
/***/ function(module, exports) {

	"use strict";
	exports.provide = function (app, service) { return app.service(service.serviceName, service.$inject.concat([service])); };


/***/ },
/* 16 */
/***/ function(module, exports) {

	"use strict";
	exports.provideAction = function (app, value) {
	    app.value(value.type, value);
	};


/***/ },
/* 17 */
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
/* 18 */
/***/ function(module, exports) {

	"use strict";
	exports.isBetween = function (value, lowerLimit, upperLimit) {
	    if (upperLimit === void 0) { upperLimit = null; }
	    return false;
	};


/***/ },
/* 19 */
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
/* 20 */
/***/ function(module, exports) {

	"use strict";
	var $q = angular.injector(['ng']).get("$q");
	/**
	 * @description Append To Body Asynchrously
	 * @param options
	 */
	exports.appendToBodyAsync = function (options) {
	    var deferred = $q.defer();
	    document.body.appendChild(options.nativeElement);
	    setTimeout(function () { deferred.resolve(); }, options.wait || 100);
	    return deferred.promise;
	};
	angular.module("appendToBodyAsync", []).value("appendToBodyAsync", exports.appendToBodyAsync);


/***/ },
/* 21 */
/***/ function(module, exports) {

	// Extracted from Underscore.js 1.5.2
	function debounce(func, wait, immediate) {
	    var timeout, args, context, timestamp, result;
	    return function () {
	        context = this;
	        args = arguments;
	        timestamp = new Date();
	        var later = function () {
	            var last = (new Date()) - timestamp;
	            if (last < wait) {
	                timeout = setTimeout(later, wait - last);
	            }
	            else {
	                timeout = null;
	                if (!immediate) {
	                    result = func.apply(context, args);
	                }
	            }
	        };
	        var callNow = immediate && !timeout;
	        if (!timeout) {
	            timeout = setTimeout(later, wait);
	        }
	        if (callNow) {
	            result = func.apply(context, args);
	        }
	        return result;
	    };
	}
	angular.module("debounce", []).value("debounce", debounce);


/***/ },
/* 22 */
/***/ function(module, exports) {

	"use strict";
	var $q = angular.injector(['ng']).get("$q");
	exports.extendCssAsync = function (options) {
	    return $q.when(angular.extend(options.nativeHTMLElement.style, options.cssObject));
	};
	angular.module("extendCssAsync", []).value("extendCssAsync", exports.extendCssAsync);


/***/ },
/* 23 */
/***/ function(module, exports) {

	"use strict";
	exports.getFromUrlSync = function (options) {
	    var responseText = "";
	    var xhr = new XMLHttpRequest();
	    xhr.open("GET", options.url, false);
	    xhr.onload = function (e) {
	        if (xhr.readyState === 4) {
	            if (xhr.status === 200) {
	                responseText = xhr.responseText;
	            }
	            else {
	                console.error(xhr.statusText);
	            }
	        }
	    };
	    xhr.send(null);
	    return responseText;
	};
	angular.module("getFromUrlSync", []).value("getFromUrlSync", exports.getFromUrlSync);


/***/ },
/* 24 */
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
/* 25 */
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
	        m.controller(options.componentName ? options.componentName : componentNameCamelCase + "Component", options.component);
	    };
	    return m;
	};


/***/ },
/* 26 */
/***/ function(module, exports) {

	"use strict";
	exports.removeElement = function (options) {
	    if (options.nativeHTMLElement) {
	        var $target = angular.element(options.nativeHTMLElement);
	        options.nativeHTMLElement.parentNode.removeChild(options.nativeHTMLElement);
	        $target.remove();
	        delete options.nativeHTMLElement;
	    }
	};
	angular.module("removeElement", []).value("removeElement", exports.removeElement);


/***/ },
/* 27 */
/***/ function(module, exports) {

	angular.module("safeDigest", []).value("safeDigest", function (scope) {
	    if (!scope.$$phase && (scope.$root && !scope.$root.$$phase))
	        scope.$digest();
	});


/***/ },
/* 28 */
/***/ function(module, exports) {

	"use strict";
	var $q = angular.injector(['ng']).get("$q");
	exports.setOpacityAsync = function (options) {
	    var deferred = $q.defer();
	    if (options.nativeHtmlElement) {
	        options.nativeHtmlElement.style.opacity = options.opacity;
	        options.nativeHtmlElement.addEventListener('transitionend', resolve, false);
	    }
	    function resolve() {
	        options.nativeHtmlElement.removeEventListener('transitionend', resolve);
	        deferred.resolve();
	    }
	    return deferred.promise;
	};
	angular.module("setOpacityAsync", []).value("setOpacityAsync", exports.setOpacityAsync);


/***/ },
/* 29 */
/***/ function(module, exports) {

	"use strict";
	var $q = angular.injector(['ng']).get("$q");
	exports.translateXAsync = function (options) {
	    var deferred = $q.defer();
	    angular.element(options.element).css({
	        "-moz-transform": "translateX(" + options.x + "px)",
	        "-webkit-transform": "translateX(" + options.x + "px)",
	        "-ms-transform": "translateX(" + options.x + "px)",
	        "-transform": "translateX(" + options.x + "px)"
	    });
	    options.element.addEventListener('transitionend', resolve, false);
	    function resolve() {
	        options.element.removeEventListener('transitionend', resolve);
	        deferred.resolve();
	    }
	    return deferred.promise;
	};
	angular.module("translateXAsync", []).value("translateXAsync", exports.translateXAsync);


/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	__webpack_require__(1);
	var core_1 = __webpack_require__(1);
	var ads_component_1 = __webpack_require__(31);
	var ads_action_creator_1 = __webpack_require__(37);
	var reducers = __webpack_require__(40);
	var actions = __webpack_require__(41);
	var app = angular.module("app.ads", [
	    "app.core"
	]);
	core_1.provide(app, ads_action_creator_1.AdsActionCreator);
	app.component(ads_component_1.AdsComponent);
	app.config(["reducersProvider", function (reducersProvider) {
	        for (var reducer in reducers) {
	            reducersProvider.configure(reducers[reducer]);
	        }
	    }]);
	for (var action in actions) {
	    core_1.provideAction(app, actions[action]);
	}


/***/ },
/* 31 */
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
	var core_1 = __webpack_require__(1);
	var AdsComponent = (function () {
	    function AdsComponent() {
	    }
	    AdsComponent = __decorate([
	        core_1.Component({
	            template: __webpack_require__(32),
	            styles: [__webpack_require__(33)],
	            selector: "ads",
	            changeDetection: core_1.ChangeDetectionStrategy.OnPush
	        }), 
	        __metadata('design:paramtypes', [])
	    ], AdsComponent);
	    return AdsComponent;
	}());
	exports.AdsComponent = AdsComponent;


/***/ },
/* 32 */
/***/ function(module, exports) {

	module.exports = "<div class=\"ads\">\r\n\r\n</div>\r\n"

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(34);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(36)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./ads.component.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./ads.component.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(35)();
	// imports


	// module
	exports.push([module.id, "", ""]);

	// exports


/***/ },
/* 35 */
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
/* 36 */
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
/* 37 */
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
	var core_1 = __webpack_require__(1);
	var modal_action_creator_1 = __webpack_require__(38);
	var AdsActionCreator = (function () {
	    function AdsActionCreator(dispatcher, guid, invokeAsync, modalActionCreator) {
	        this.dispatcher = dispatcher;
	        this.guid = guid;
	        this.invokeAsync = invokeAsync;
	        this.modalActionCreator = modalActionCreator;
	    }
	    AdsActionCreator = __decorate([
	        core_1.Service({
	            serviceName: "adsActionCreator",
	            viewProviders: ["dispatcher", "guid", "invokeAsync", "modalActionCreator"]
	        }), 
	        __metadata('design:paramtypes', [Object, Object, Object, modal_action_creator_1.ModalActionCreator])
	    ], AdsActionCreator);
	    return AdsActionCreator;
	}());
	exports.AdsActionCreator = AdsActionCreator;


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
	var modal_actions_1 = __webpack_require__(39);
	var core_1 = __webpack_require__(1);
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
/* 39 */
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
	var core_1 = __webpack_require__(1);
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
/* 40 */
/***/ function(module, exports) {

	"use strict";


/***/ },
/* 41 */
/***/ function(module, exports) {

	"use strict";
	var Default = (function () {
	    function Default() {
	    }
	    return Default;
	}());
	exports.Default = Default;


/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	__webpack_require__(1);
	var core_1 = __webpack_require__(1);
	var article_body_component_1 = __webpack_require__(43);
	var article_detail_component_1 = __webpack_require__(47);
	var article_header_component_1 = __webpack_require__(51);
	var article_list_component_1 = __webpack_require__(55);
	var article_list_item_component_1 = __webpack_require__(59);
	var article_featured_image_component_1 = __webpack_require__(63);
	var article_action_creator_1 = __webpack_require__(67);
	var reducers = __webpack_require__(68);
	var actions = __webpack_require__(69);
	var app = angular.module("app.article", [
	    "ngSanitize",
	    "app.core"
	]);
	core_1.provide(app, article_action_creator_1.ArticleActionCreator);
	app.component(article_body_component_1.ArticleBodyComponent);
	app.component(article_detail_component_1.ArticleDetailComponent);
	app.component(article_header_component_1.ArticleHeaderComponent);
	app.component(article_list_component_1.ArticleListComponent);
	app.component(article_list_item_component_1.ArticleListItemComponent);
	app.component(article_featured_image_component_1.ArticleFeaturedImageComponent);
	app.config(["reducersProvider", function (reducersProvider) {
	        for (var reducer in reducers) {
	            reducersProvider.configure(reducers[reducer]);
	        }
	    }]);
	for (var action in actions) {
	    core_1.provideAction(app, actions[action]);
	}


/***/ },
/* 43 */
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
	var core_1 = __webpack_require__(1);
	var ArticleBodyComponent = (function () {
	    function ArticleBodyComponent() {
	    }
	    ArticleBodyComponent = __decorate([
	        core_1.Component({
	            template: __webpack_require__(44),
	            styles: [__webpack_require__(45)],
	            selector: "article-body",
	            changeDetection: core_1.ChangeDetectionStrategy.OnPush
	        }), 
	        __metadata('design:paramtypes', [])
	    ], ArticleBodyComponent);
	    return ArticleBodyComponent;
	}());
	exports.ArticleBodyComponent = ArticleBodyComponent;


/***/ },
/* 44 */
/***/ function(module, exports) {

	module.exports = "<div class=\"article-body\">\r\n    <div data-ng-bind-html=\"vm.htmlBody\"></div>\r\n</div>\r\n"

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(46);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(36)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./article-body.component.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./article-body.component.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(35)();
	// imports


	// module
	exports.push([module.id, "", ""]);

	// exports


/***/ },
/* 47 */
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
	var core_1 = __webpack_require__(1);
	var ArticleDetailComponent = (function () {
	    function ArticleDetailComponent() {
	    }
	    ArticleDetailComponent = __decorate([
	        core_1.Component({
	            template: __webpack_require__(48),
	            styles: [__webpack_require__(49)],
	            selector: "article-detail",
	            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
	            inputs: ["article"]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], ArticleDetailComponent);
	    return ArticleDetailComponent;
	}());
	exports.ArticleDetailComponent = ArticleDetailComponent;


/***/ },
/* 48 */
/***/ function(module, exports) {

	module.exports = "<div class=\"article-detail\">\r\n    <article-featured-image></article-featured-image>\r\n    <article-header></article-header>\r\n    <article-body></article-body>\r\n</div>\r\n"

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(50);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(36)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./article-detail.component.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./article-detail.component.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(35)();
	// imports


	// module
	exports.push([module.id, "", ""]);

	// exports


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
	var core_1 = __webpack_require__(1);
	var ArticleHeaderComponent = (function () {
	    function ArticleHeaderComponent() {
	    }
	    ArticleHeaderComponent = __decorate([
	        core_1.Component({
	            template: __webpack_require__(52),
	            styles: [__webpack_require__(53)],
	            selector: "article-header",
	            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
	            inputs: [
	                "articleTitle",
	                "articleHref",
	                "articlePublishedDate"
	            ]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], ArticleHeaderComponent);
	    return ArticleHeaderComponent;
	}());
	exports.ArticleHeaderComponent = ArticleHeaderComponent;


/***/ },
/* 52 */
/***/ function(module, exports) {

	module.exports = "<div class=\"article-header\">\r\n    <a>\r\n        {{ vm.articlePublishedDate }}\r\n    </a>\r\n    <a class=\"blog-header\" data-ng-href=\"{{ vm.articleHeaderHref }}\">\r\n        <h2>{{ vm.articleTitle }}</h2>\r\n    </a>\r\n</div>\r\n"

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(54);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(36)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./article-header.component.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./article-header.component.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(35)();
	// imports


	// module
	exports.push([module.id, "", ""]);

	// exports


/***/ },
/* 55 */
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
	var core_1 = __webpack_require__(1);
	var ArticleListComponent = (function () {
	    function ArticleListComponent() {
	    }
	    ArticleListComponent = __decorate([
	        core_1.Component({
	            template: __webpack_require__(56),
	            styles: [__webpack_require__(57)],
	            selector: "article-list",
	            changeDetection: core_1.ChangeDetectionStrategy.OnPush
	        }), 
	        __metadata('design:paramtypes', [])
	    ], ArticleListComponent);
	    return ArticleListComponent;
	}());
	exports.ArticleListComponent = ArticleListComponent;


/***/ },
/* 56 */
/***/ function(module, exports) {

	module.exports = "<div class=\"article-list\">\r\n\r\n</div>\r\n"

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(58);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(36)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./article-list.component.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./article-list.component.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(35)();
	// imports


	// module
	exports.push([module.id, "", ""]);

	// exports


/***/ },
/* 59 */
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
	var core_1 = __webpack_require__(1);
	var ArticleListItemComponent = (function () {
	    function ArticleListItemComponent() {
	    }
	    ArticleListItemComponent = __decorate([
	        core_1.Component({
	            template: __webpack_require__(60),
	            styles: [__webpack_require__(61)],
	            selector: "article-list-item",
	            changeDetection: core_1.ChangeDetectionStrategy.OnPush
	        }), 
	        __metadata('design:paramtypes', [])
	    ], ArticleListItemComponent);
	    return ArticleListItemComponent;
	}());
	exports.ArticleListItemComponent = ArticleListItemComponent;


/***/ },
/* 60 */
/***/ function(module, exports) {

	module.exports = "<div class=\"article-list-item\">\r\n\r\n</div>\r\n"

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(62);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(36)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./article-list-item.component.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./article-list-item.component.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(35)();
	// imports


	// module
	exports.push([module.id, "", ""]);

	// exports


/***/ },
/* 63 */
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
	var core_1 = __webpack_require__(1);
	var ArticleFeaturedImageComponent = (function () {
	    function ArticleFeaturedImageComponent() {
	    }
	    ArticleFeaturedImageComponent = __decorate([
	        core_1.Component({
	            template: __webpack_require__(64),
	            styles: [__webpack_require__(65)],
	            selector: "article-featured-image",
	            changeDetection: core_1.ChangeDetectionStrategy.OnPush
	        }), 
	        __metadata('design:paramtypes', [])
	    ], ArticleFeaturedImageComponent);
	    return ArticleFeaturedImageComponent;
	}());
	exports.ArticleFeaturedImageComponent = ArticleFeaturedImageComponent;


/***/ },
/* 64 */
/***/ function(module, exports) {

	module.exports = "<div class=\"article-featured-image\">\r\n\r\n</div>\r\n"

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(66);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(36)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./article-featured-image.component.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./article-featured-image.component.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(35)();
	// imports


	// module
	exports.push([module.id, "", ""]);

	// exports


/***/ },
/* 67 */
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
	var core_1 = __webpack_require__(1);
	var modal_action_creator_1 = __webpack_require__(38);
	var ArticleActionCreator = (function () {
	    function ArticleActionCreator(dispatcher, guid, invokeAsync, modalActionCreator) {
	        this.dispatcher = dispatcher;
	        this.guid = guid;
	        this.invokeAsync = invokeAsync;
	        this.modalActionCreator = modalActionCreator;
	    }
	    ArticleActionCreator = __decorate([
	        core_1.Service({
	            serviceName: "articleActionCreator",
	            viewProviders: ["dispatcher", "guid", "invokeAsync", "modalActionCreator"]
	        }), 
	        __metadata('design:paramtypes', [Object, Object, Object, modal_action_creator_1.ModalActionCreator])
	    ], ArticleActionCreator);
	    return ArticleActionCreator;
	}());
	exports.ArticleActionCreator = ArticleActionCreator;


/***/ },
/* 68 */
/***/ function(module, exports) {

	"use strict";


/***/ },
/* 69 */
/***/ function(module, exports) {

	"use strict";
	var Default = (function () {
	    function Default() {
	    }
	    return Default;
	}());
	exports.Default = Default;


/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	__webpack_require__(1);
	var core_1 = __webpack_require__(1);
	var author_component_1 = __webpack_require__(71);
	var author_action_creator_1 = __webpack_require__(75);
	var reducers = __webpack_require__(76);
	var actions = __webpack_require__(77);
	var app = angular.module("app.author", [
	    "app.core"
	]);
	core_1.provide(app, author_action_creator_1.AuthorActionCreator);
	app.component(author_component_1.AuthorComponent);
	app.config(["reducersProvider", function (reducersProvider) {
	        for (var reducer in reducers) {
	            reducersProvider.configure(reducers[reducer]);
	        }
	    }]);
	for (var action in actions) {
	    core_1.provideAction(app, actions[action]);
	}


/***/ },
/* 71 */
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
	var core_1 = __webpack_require__(1);
	var AuthorComponent = (function () {
	    function AuthorComponent() {
	    }
	    AuthorComponent = __decorate([
	        core_1.Component({
	            template: __webpack_require__(72),
	            styles: [__webpack_require__(73)],
	            selector: "author",
	            changeDetection: core_1.ChangeDetectionStrategy.OnPush
	        }), 
	        __metadata('design:paramtypes', [])
	    ], AuthorComponent);
	    return AuthorComponent;
	}());
	exports.AuthorComponent = AuthorComponent;


/***/ },
/* 72 */
/***/ function(module, exports) {

	module.exports = "<div class=\"author\">\r\n\r\n</div>\r\n"

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(74);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(36)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./author.component.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./author.component.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(35)();
	// imports


	// module
	exports.push([module.id, "", ""]);

	// exports


/***/ },
/* 75 */
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
	var core_1 = __webpack_require__(1);
	var modal_action_creator_1 = __webpack_require__(38);
	var AuthorActionCreator = (function () {
	    function AuthorActionCreator(dispatcher, guid, invokeAsync, modalActionCreator) {
	        this.dispatcher = dispatcher;
	        this.guid = guid;
	        this.invokeAsync = invokeAsync;
	        this.modalActionCreator = modalActionCreator;
	    }
	    AuthorActionCreator = __decorate([
	        core_1.Service({
	            serviceName: "authorActionCreator",
	            viewProviders: ["dispatcher", "guid", "invokeAsync", "modalActionCreator"]
	        }), 
	        __metadata('design:paramtypes', [Object, Object, Object, modal_action_creator_1.ModalActionCreator])
	    ], AuthorActionCreator);
	    return AuthorActionCreator;
	}());
	exports.AuthorActionCreator = AuthorActionCreator;


/***/ },
/* 76 */
/***/ function(module, exports) {

	"use strict";


/***/ },
/* 77 */
/***/ function(module, exports) {

	"use strict";
	var Default = (function () {
	    function Default() {
	    }
	    return Default;
	}());
	exports.Default = Default;


/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	__webpack_require__(1);
	var core_1 = __webpack_require__(1);
	var backdrop_service_1 = __webpack_require__(79);
	var app = angular.module("app.backdrop", [
	    "app.core"
	]);
	core_1.provide(app, backdrop_service_1.Backdrop);
	app.run(["backdrop", function (backdrop) { }]);


/***/ },
/* 79 */
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
	var core_1 = __webpack_require__(1);
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
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	__webpack_require__(1);
	var core_1 = __webpack_require__(1);
	var category_component_1 = __webpack_require__(81);
	var category_action_creator_1 = __webpack_require__(85);
	var reducers = __webpack_require__(86);
	var actions = __webpack_require__(87);
	var app = angular.module("app.category", [
	    "app.core"
	]);
	core_1.provide(app, category_action_creator_1.CategoryActionCreator);
	app.component(category_component_1.CategoryComponent);
	app.config(["reducersProvider", function (reducersProvider) {
	        for (var reducer in reducers) {
	            reducersProvider.configure(reducers[reducer]);
	        }
	    }]);
	for (var action in actions) {
	    core_1.provideAction(app, actions[action]);
	}


/***/ },
/* 81 */
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
	var core_1 = __webpack_require__(1);
	var CategoryComponent = (function () {
	    function CategoryComponent() {
	    }
	    CategoryComponent = __decorate([
	        core_1.Component({
	            template: __webpack_require__(82),
	            styles: [__webpack_require__(83)],
	            selector: "category",
	            changeDetection: core_1.ChangeDetectionStrategy.OnPush
	        }), 
	        __metadata('design:paramtypes', [])
	    ], CategoryComponent);
	    return CategoryComponent;
	}());
	exports.CategoryComponent = CategoryComponent;


/***/ },
/* 82 */
/***/ function(module, exports) {

	module.exports = "<div class=\"category\">\r\n\r\n</div>\r\n"

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(84);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(36)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./category.component.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./category.component.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(35)();
	// imports


	// module
	exports.push([module.id, "", ""]);

	// exports


/***/ },
/* 85 */
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
	var core_1 = __webpack_require__(1);
	var modal_action_creator_1 = __webpack_require__(38);
	var CategoryActionCreator = (function () {
	    function CategoryActionCreator(dispatcher, guid, invokeAsync, modalActionCreator) {
	        this.dispatcher = dispatcher;
	        this.guid = guid;
	        this.invokeAsync = invokeAsync;
	        this.modalActionCreator = modalActionCreator;
	    }
	    CategoryActionCreator = __decorate([
	        core_1.Service({
	            serviceName: "categoryActionCreator",
	            viewProviders: ["dispatcher", "guid", "invokeAsync", "modalActionCreator"]
	        }), 
	        __metadata('design:paramtypes', [Object, Object, Object, modal_action_creator_1.ModalActionCreator])
	    ], CategoryActionCreator);
	    return CategoryActionCreator;
	}());
	exports.CategoryActionCreator = CategoryActionCreator;


/***/ },
/* 86 */
/***/ function(module, exports) {

	"use strict";


/***/ },
/* 87 */
/***/ function(module, exports) {

	"use strict";
	var Default = (function () {
	    function Default() {
	    }
	    return Default;
	}());
	exports.Default = Default;


/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	__webpack_require__(1);
	var core_1 = __webpack_require__(1);
	var counter_component_1 = __webpack_require__(89);
	var counter_action_creator_1 = __webpack_require__(90);
	var actions = __webpack_require__(91);
	var reducers = __webpack_require__(95);
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
/* 89 */
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
	var core_1 = __webpack_require__(1);
	var counter_action_creator_1 = __webpack_require__(90);
	var CounterComponent = (function () {
	    function CounterComponent(counterActionCreator) {
	        var _this = this;
	        this.counterActionCreator = counterActionCreator;
	        this.storeOnChange = function (store) { return _this.count = store.count || 0; };
	        this.increment = function () { return _this.counterActionCreator.increment(); };
	        this.decrement = function () { return _this.counterActionCreator.decrement(); };
	    }
	    CounterComponent = __decorate([
	        core_1.Component({
	            template: __webpack_require__(92),
	            styles: [__webpack_require__(93)],
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
/* 90 */
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
	var core_1 = __webpack_require__(1);
	var counter_actions_1 = __webpack_require__(91);
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
/* 91 */
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
	var core_1 = __webpack_require__(1);
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
/* 92 */
/***/ function(module, exports) {

	module.exports = "<div class=\"counter\">\r\n    <h1>{{ vm.count }}</h1>\r\n    <a data-ng-click=\"vm.increment()\">Increment</a>\r\n    <a data-ng-click=\"vm.decrement()\">Decrement</a>\r\n</div>"

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(94);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(36)(content, {});
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
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(35)();
	// imports


	// module
	exports.push([module.id, ".counter a {\n  color: red; }\n", ""]);

	// exports


/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var actions = __webpack_require__(91);
	exports.counterReducer = function (state, action) {
	    state.count = state.count || 0;
	    if (action instanceof actions.Increment)
	        state.count = state.count + 1;
	    if (action instanceof actions.Decrement)
	        state.count = state.count - 1;
	    return state;
	};


/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	__webpack_require__(1);
	var core_1 = __webpack_require__(1);
	var flip_card_component_1 = __webpack_require__(97);
	var flip_card_back_component_1 = __webpack_require__(101);
	var flip_card_front_component_1 = __webpack_require__(103);
	var flip_card_action_creator_1 = __webpack_require__(105);
	var reducers = __webpack_require__(106);
	var app = angular.module("app.flipCard", [
	    "app.core"
	]);
	core_1.provide(app, flip_card_action_creator_1.FlipCardActionCreator);
	app.component(flip_card_component_1.FlipCardComponent);
	app.component(flip_card_front_component_1.FlipCardFrontComponent);
	app.component(flip_card_back_component_1.FlipCardBackComponent);
	app.config(["reducersProvider", function (reducersProvider) {
	        for (var reducer in reducers) {
	            reducersProvider.configure(reducers[reducer]);
	        }
	    }]);


/***/ },
/* 97 */
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
	var core_1 = __webpack_require__(1);
	var FlipCardComponent = (function () {
	    function FlipCardComponent($attrs, $element) {
	        var _this = this;
	        this.$attrs = $attrs;
	        this.$element = $element;
	        this.ngOnInit = function () {
	            _this.$element[0].style.height = _this.height;
	            _this.$element[0].style.width = _this.width;
	            _this.$element[0].addEventListener("ontouchstart", function () {
	                _this.$element[0].classList.toggle('hover');
	            });
	        };
	        this.ngOnChildInit = function (options) {
	            var nativeElement = options.component.$element[0];
	            nativeElement.style.height = _this.height;
	            nativeElement.style.width = _this.width;
	            _this.viewChildren.push(nativeElement);
	            options.component.added = _this.added;
	            options.component.toggleAdded = _this.toggleAdded;
	            _this.components.push(options.component);
	            if (_this.viewChildren.length == 2) {
	                _this.viewChildren[0].style.backgroundColor = "#ECECEC";
	                _this.viewChildren[1].style.backgroundColor = "#B32E31";
	            }
	        };
	        this.toggleAdded = function (options) {
	            _this.added = !_this.added;
	            _this.components[1].added = _this.added;
	        };
	        this.added = false;
	        this.viewChildren = [];
	        this.components = [];
	    }
	    Object.defineProperty(FlipCardComponent.prototype, "height", {
	        get: function () { return this.$attrs.height || "480px"; },
	        set: function (value) { },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(FlipCardComponent.prototype, "width", {
	        get: function () { return this.$attrs.width || "320px"; },
	        set: function (value) { },
	        enumerable: true,
	        configurable: true
	    });
	    FlipCardComponent = __decorate([
	        core_1.Component({
	            template: __webpack_require__(98),
	            styleUrls: [__webpack_require__(99)],
	            transclude: {
	                'front': '?flipCardFront',
	                'back': '?flipCardBack'
	            },
	            selector: "flip-card",
	            viewProviders: ["$attrs", "$element"],
	            inputs: ['height?', 'width?', 'toggleAdded?', 'added?']
	        }), 
	        __metadata('design:paramtypes', [Object, Object])
	    ], FlipCardComponent);
	    return FlipCardComponent;
	}());
	exports.FlipCardComponent = FlipCardComponent;


/***/ },
/* 98 */
/***/ function(module, exports) {

	module.exports = "<div class=\"flip-container\">\r\n    <div class=\"flipper\">\r\n        <div ng-transclude=\"front\"></div>\r\n        <div ng-transclude=\"back\"></div>\r\n    </div>\r\n</div>"

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(100);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(36)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./flip-card.component.css", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./flip-card.component.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(35)();
	// imports


	// module
	exports.push([module.id, "/* entire container, keeps perspective */\r\n.flip-container {\r\n\tperspective: 1000;\r\n}\r\n\r\n/* flip the pane when hovered */\r\n.flip-container:hover .flipper, .flip-container.hover .flipper {\r\n\ttransform: rotateY(180deg);\r\n}\r\n\r\n/* flip speed goes here */\r\n.flip-container .flipper {\r\n\ttransition: 0.6s;\r\n\ttransform-style: preserve-3d;\r\n    \r\n\r\n\tposition: relative;\r\n}\r\n\r\n/* hide back of pane during swap */\r\n.flip-container .front, .flip-container .back {\r\n\tbackface-visibility: hidden;\r\n\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\tleft: 0;\r\n}\r\n\r\n/* front pane, placed above back */\r\n.flip-container .front {\r\n\tz-index: 2;\r\n\t/* for firefox 31 */\r\n\ttransform: rotateY(0deg);\r\n}\r\n\r\n/* back, initially hidden pane */\r\n.flip-container .back {\r\n\ttransform: rotateY(180deg);\r\n}\r\n\r\n.flip-container {\r\n    position:relative; \r\n    float:left; \r\n}", ""]);

	// exports


/***/ },
/* 101 */
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
	var core_1 = __webpack_require__(1);
	var FlipCardBackComponent = (function () {
	    function FlipCardBackComponent($element) {
	        var _this = this;
	        this.$element = $element;
	        this.storeOnChange = function (state) { };
	        this.ngOnInit = function () { _this.flipCard.ngOnChildInit({ component: _this }); };
	    }
	    FlipCardBackComponent = __decorate([
	        core_1.Component({
	            template: __webpack_require__(102),
	            selector: "flip-card-back",
	            transclude: true,
	            require: '^flipCard',
	            viewProviders: ["$element"]
	        }), 
	        __metadata('design:paramtypes', [Object])
	    ], FlipCardBackComponent);
	    return FlipCardBackComponent;
	}());
	exports.FlipCardBackComponent = FlipCardBackComponent;


/***/ },
/* 102 */
/***/ function(module, exports) {

	module.exports = "<div class=\"back\">\r\n    <div class=\"flip-card-back-added-container\">\r\n        <h1 class=\"flip-card-back-added\" data-ng-if=\"!vm.added\" data-ng-click=\"vm.toggleAdded()\">+</h1>\r\n        <h1 class=\"flip-card-back-added\" data-ng-if=\"vm.added\" data-ng-click=\"vm.toggleAdded()\">-</h1>\r\n    </div>\r\n    <ng-transclude></ng-transclude>\r\n</div>"

/***/ },
/* 103 */
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
	var core_1 = __webpack_require__(1);
	var FlipCardFrontComponent = (function () {
	    function FlipCardFrontComponent($element) {
	        var _this = this;
	        this.$element = $element;
	        this.ngOnInit = function () { _this.flipCard.ngOnChildInit({ component: _this }); };
	    }
	    FlipCardFrontComponent = __decorate([
	        core_1.Component({
	            template: __webpack_require__(104),
	            selector: "flip-card-front",
	            transclude: true,
	            require: '^flipCard',
	            viewProviders: ["$element"]
	        }), 
	        __metadata('design:paramtypes', [Object])
	    ], FlipCardFrontComponent);
	    return FlipCardFrontComponent;
	}());
	exports.FlipCardFrontComponent = FlipCardFrontComponent;


/***/ },
/* 104 */
/***/ function(module, exports) {

	module.exports = "<div class=\"front\">\r\n    <ng-transclude></ng-transclude>\r\n</div>"

/***/ },
/* 105 */
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
	var core_1 = __webpack_require__(1);
	var FlipCardActionCreator = (function () {
	    function FlipCardActionCreator(dispatcher, guid) {
	        this.dispatcher = dispatcher;
	        this.guid = guid;
	    }
	    FlipCardActionCreator = __decorate([
	        core_1.Service({
	            serviceName: "flipCardActionCreator",
	            viewProviders: ["$location", "dispatcher", "guid"]
	        }), 
	        __metadata('design:paramtypes', [Object, Object])
	    ], FlipCardActionCreator);
	    return FlipCardActionCreator;
	}());
	exports.FlipCardActionCreator = FlipCardActionCreator;


/***/ },
/* 106 */
/***/ function(module, exports) {

	"use strict";


/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	__webpack_require__(1);
	__webpack_require__(78);
	var core_1 = __webpack_require__(1);
	var modal_action_creator_1 = __webpack_require__(38);
	var modal_service_1 = __webpack_require__(108);
	var reducers = __webpack_require__(109);
	var actions = __webpack_require__(39);
	var modal_component_1 = __webpack_require__(110);
	var modal_title_component_1 = __webpack_require__(114);
	var modal_content_component_1 = __webpack_require__(118);
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
/* 108 */
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
	var core_1 = __webpack_require__(1);
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
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var actions = __webpack_require__(39);
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
/* 110 */
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
	var core_1 = __webpack_require__(1);
	var modal_action_creator_1 = __webpack_require__(38);
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
	            template: __webpack_require__(111),
	            styles: [__webpack_require__(112)],
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
/* 111 */
/***/ function(module, exports) {

	module.exports = "<div class=\"modal\">\r\n    <h1 data-ng-click=\"vm.close()\" class=\"modal-close\">X</h1>\r\n    <div ng-transclude=\"title\"></div>\r\n    <div ng-transclude=\"content\"></div>\r\n</div>"

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(113);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(36)(content, {});
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
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(35)();
	// imports


	// module
	exports.push([module.id, ".modal-close {\r\n    cursor:pointer;\r\n}", ""]);

	// exports


/***/ },
/* 114 */
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
	var core_1 = __webpack_require__(1);
	var modal_action_creator_1 = __webpack_require__(38);
	var ModalTitleComponent = (function () {
	    function ModalTitleComponent($attrs, modalActionCreator) {
	        this.$attrs = $attrs;
	        this.modalActionCreator = modalActionCreator;
	        this.storeOnChange = function (state) { };
	    }
	    ModalTitleComponent = __decorate([
	        core_1.Component({
	            template: __webpack_require__(115),
	            styles: [__webpack_require__(116)],
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
/* 115 */
/***/ function(module, exports) {

	module.exports = "<div class=\"modal-title\">\r\n    <ng-transclude></ng-transclude>\r\n</div>"

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(117);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(36)(content, {});
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
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(35)();
	// imports


	// module
	exports.push([module.id, "", ""]);

	// exports


/***/ },
/* 118 */
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
	var core_1 = __webpack_require__(1);
	var modal_action_creator_1 = __webpack_require__(38);
	var ModalContentComponent = (function () {
	    function ModalContentComponent($attrs, modalActionCreator) {
	        this.$attrs = $attrs;
	        this.modalActionCreator = modalActionCreator;
	        this.storeOnChange = function (state) { };
	    }
	    ModalContentComponent = __decorate([
	        core_1.Component({
	            template: __webpack_require__(119),
	            styles: [__webpack_require__(120)],
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
/* 119 */
/***/ function(module, exports) {

	module.exports = "<div class=\"modal-content\">\r\n    <ng-transclude></ng-transclude>\r\n</div>"

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(121);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(36)(content, {});
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
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(35)();
	// imports


	// module
	exports.push([module.id, "", ""]);

	// exports


/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	__webpack_require__(1);
	var core_1 = __webpack_require__(1);
	var nav_menu_component_1 = __webpack_require__(123);
	var nav_menu_action_creator_1 = __webpack_require__(127);
	var reducers = __webpack_require__(128);
	var actions = __webpack_require__(129);
	var app = angular.module("app.navMenu", [
	    "app.core"
	]);
	core_1.provide(app, nav_menu_action_creator_1.NavMenuActionCreator);
	app.component(nav_menu_component_1.NavMenuComponent);
	app.config(["reducersProvider", function (reducersProvider) {
	        for (var reducer in reducers) {
	            reducersProvider.configure(reducers[reducer]);
	        }
	    }]);
	for (var action in actions) {
	    core_1.provideAction(app, actions[action]);
	}


/***/ },
/* 123 */
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
	var core_1 = __webpack_require__(1);
	var NavMenuComponent = (function () {
	    function NavMenuComponent() {
	    }
	    NavMenuComponent = __decorate([
	        core_1.Component({
	            template: __webpack_require__(124),
	            styles: [__webpack_require__(125)],
	            selector: "nav-menu",
	            changeDetection: core_1.ChangeDetectionStrategy.OnPush
	        }), 
	        __metadata('design:paramtypes', [])
	    ], NavMenuComponent);
	    return NavMenuComponent;
	}());
	exports.NavMenuComponent = NavMenuComponent;


/***/ },
/* 124 */
/***/ function(module, exports) {

	module.exports = "<div class=\"nav-menu\">\r\n\r\n</div>\r\n"

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(126);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(36)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./nav-menu.component.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./nav-menu.component.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(35)();
	// imports


	// module
	exports.push([module.id, "", ""]);

	// exports


/***/ },
/* 127 */
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
	var core_1 = __webpack_require__(1);
	var modal_action_creator_1 = __webpack_require__(38);
	var NavMenuActionCreator = (function () {
	    function NavMenuActionCreator(dispatcher, guid, invokeAsync, modalActionCreator) {
	        this.dispatcher = dispatcher;
	        this.guid = guid;
	        this.invokeAsync = invokeAsync;
	        this.modalActionCreator = modalActionCreator;
	    }
	    NavMenuActionCreator = __decorate([
	        core_1.Service({
	            serviceName: "navMenuActionCreator",
	            viewProviders: ["dispatcher", "guid", "invokeAsync", "modalActionCreator"]
	        }), 
	        __metadata('design:paramtypes', [Object, Object, Object, modal_action_creator_1.ModalActionCreator])
	    ], NavMenuActionCreator);
	    return NavMenuActionCreator;
	}());
	exports.NavMenuActionCreator = NavMenuActionCreator;


/***/ },
/* 128 */
/***/ function(module, exports) {

	"use strict";


/***/ },
/* 129 */
/***/ function(module, exports) {

	"use strict";
	var Default = (function () {
	    function Default() {
	    }
	    return Default;
	}());
	exports.Default = Default;


/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__webpack_require__(1);
	__webpack_require__(131);
	var core_1 = __webpack_require__(1);
	var paged_list_actions_1 = __webpack_require__(133);
	var reducers = __webpack_require__(134);
	__export(__webpack_require__(135));
	__export(__webpack_require__(136));
	var app = angular.module("app.pagedList", [
	    "app.core"
	]);
	core_1.provide(app, paged_list_actions_1.PagedListActionCreator);
	app.config(["reducersProvider", function (reducersProvider) {
	        for (var reducer in reducers) {
	            reducersProvider.configure(reducers[reducer]);
	        }
	    }]);


/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(132);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(36)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./paged-list.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./paged-list.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(35)();
	// imports


	// module
	exports.push([module.id, ".previous, .next {\n  cursor: pointer; }\n\n.paged-list-navigation {\n  margin-bottom: 30px; }\n", ""]);

	// exports


/***/ },
/* 133 */
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
	var core_1 = __webpack_require__(1);
	var PagedListActionCreator = (function () {
	    function PagedListActionCreator(dispatcher, guid) {
	        this.dispatcher = dispatcher;
	        this.guid = guid;
	    }
	    PagedListActionCreator = __decorate([
	        core_1.Service({
	            serviceName: "pagedListActionCreator",
	            viewProviders: ["dispatcher", "guid"]
	        }), 
	        __metadata('design:paramtypes', [Object, Object])
	    ], PagedListActionCreator);
	    return PagedListActionCreator;
	}());
	exports.PagedListActionCreator = PagedListActionCreator;


/***/ },
/* 134 */
/***/ function(module, exports) {

	"use strict";


/***/ },
/* 135 */
/***/ function(module, exports) {

	"use strict";
	var PagedList = (function () {
	    function PagedList(_data, _page, _pageSize, _totalCount) {
	        this._data = _data;
	        this._page = _page;
	        this._pageSize = _pageSize;
	        this._totalCount = _totalCount;
	    }
	    Object.defineProperty(PagedList.prototype, "data", {
	        get: function () { return this._data; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(PagedList.prototype, "page", {
	        get: function () { return this._page; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(PagedList.prototype, "pageSize", {
	        get: function () { return this._pageSize; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(PagedList.prototype, "totalCount", {
	        get: function () { return this._totalCount; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(PagedList.prototype, "totalPages", {
	        get: function () { return Math.ceil(this._totalCount / this._pageSize); },
	        enumerable: true,
	        configurable: true
	    });
	    return PagedList;
	}());
	exports.PagedList = PagedList;


/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var validate_page_properties_and_get_skip_count_1 = __webpack_require__(137);
	var paging_config_model_1 = __webpack_require__(138);
	var paged_list_model_1 = __webpack_require__(135);
	function toPageListFromInMemory(entities, page, pageSize) {
	    if (entities == null)
	        throw new Error("entities");
	    var pagingConfig = new paging_config_model_1.PagingConfig(page, pageSize);
	    var skipCount = validate_page_properties_and_get_skip_count_1.validatePagePropertiesAndGetSkipCount(pagingConfig);
	    var data = entities.slice(skipCount, pageSize + skipCount);
	    return new paged_list_model_1.PagedList(data, page, pageSize, entities.length);
	}
	exports.toPageListFromInMemory = toPageListFromInMemory;


/***/ },
/* 137 */
/***/ function(module, exports) {

	"use strict";
	function validatePagePropertiesAndGetSkipCount(pagingConfig) {
	    if (pagingConfig.page < 1) {
	        pagingConfig.page = 1;
	    }
	    if (pagingConfig.pageSize < 1) {
	        pagingConfig.pageSize = 1;
	    }
	    if (pagingConfig.pageSize > 100) {
	        pagingConfig.pageSize = 100;
	    }
	    return pagingConfig.pageSize * (pagingConfig.page - 1);
	}
	exports.validatePagePropertiesAndGetSkipCount = validatePagePropertiesAndGetSkipCount;


/***/ },
/* 138 */
/***/ function(module, exports) {

	"use strict";
	var PagingConfig = (function () {
	    function PagingConfig(page, pageSize) {
	        this.page = page;
	        this.pageSize = pageSize;
	    }
	    return PagingConfig;
	}());
	exports.PagingConfig = PagingConfig;


/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	__webpack_require__(1);
	var core_1 = __webpack_require__(1);
	var picture_component_1 = __webpack_require__(140);
	var picture_action_creator_1 = __webpack_require__(144);
	var reducers = __webpack_require__(145);
	var actions = __webpack_require__(146);
	var app = angular.module("app.picture", [
	    "app.core"
	]);
	core_1.provide(app, picture_action_creator_1.PictureActionCreator);
	app.component(picture_component_1.PictureComponent);
	app.config(["reducersProvider", function (reducersProvider) {
	        for (var reducer in reducers) {
	            reducersProvider.configure(reducers[reducer]);
	        }
	    }]);
	for (var action in actions) {
	    core_1.provideAction(app, actions[action]);
	}


/***/ },
/* 140 */
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
	var core_1 = __webpack_require__(1);
	var PictureComponent = (function () {
	    function PictureComponent() {
	    }
	    PictureComponent = __decorate([
	        core_1.Component({
	            template: __webpack_require__(141),
	            styles: [__webpack_require__(142)],
	            selector: "picture",
	            changeDetection: core_1.ChangeDetectionStrategy.OnPush
	        }), 
	        __metadata('design:paramtypes', [])
	    ], PictureComponent);
	    return PictureComponent;
	}());
	exports.PictureComponent = PictureComponent;


/***/ },
/* 141 */
/***/ function(module, exports) {

	module.exports = "<div class=\"picture\">\r\n\r\n</div>\r\n"

/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(143);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(36)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./picture.component.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./picture.component.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(35)();
	// imports


	// module
	exports.push([module.id, "", ""]);

	// exports


/***/ },
/* 144 */
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
	var core_1 = __webpack_require__(1);
	var modal_action_creator_1 = __webpack_require__(38);
	var PictureActionCreator = (function () {
	    function PictureActionCreator(dispatcher, guid, invokeAsync, modalActionCreator) {
	        this.dispatcher = dispatcher;
	        this.guid = guid;
	        this.invokeAsync = invokeAsync;
	        this.modalActionCreator = modalActionCreator;
	    }
	    PictureActionCreator = __decorate([
	        core_1.Service({
	            serviceName: "pictureActionCreator",
	            viewProviders: ["dispatcher", "guid", "invokeAsync", "modalActionCreator"]
	        }), 
	        __metadata('design:paramtypes', [Object, Object, Object, modal_action_creator_1.ModalActionCreator])
	    ], PictureActionCreator);
	    return PictureActionCreator;
	}());
	exports.PictureActionCreator = PictureActionCreator;


/***/ },
/* 145 */
/***/ function(module, exports) {

	"use strict";


/***/ },
/* 146 */
/***/ function(module, exports) {

	"use strict";
	var Default = (function () {
	    function Default() {
	    }
	    return Default;
	}());
	exports.Default = Default;


/***/ },
/* 147 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	__webpack_require__(1);
	var core_1 = __webpack_require__(1);
	var rotator_component_1 = __webpack_require__(148);
	var rotator_action_creator_1 = __webpack_require__(149);
	var reducers = __webpack_require__(155);
	var app = angular.module("app.rotator", [
	    "ngTouch",
	    "app.core"
	]);
	core_1.provide(app, rotator_action_creator_1.RotatorActionCreator);
	app.component(rotator_component_1.RotatorComponent);
	app.config(["reducersProvider", function (reducersProvider) {
	        for (var reducer in reducers) {
	            reducersProvider.configure(reducers[reducer]);
	        }
	    }]);


/***/ },
/* 148 */
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
	var core_1 = __webpack_require__(1);
	var rotator_action_creator_1 = __webpack_require__(149);
	var window_actions_1 = __webpack_require__(151);
	var RotatorComponent = (function () {
	    function RotatorComponent($attrs, $compile, $element, $http, $interval, $location, $q, $scope, $timeout, $transclude, debounce, getFromUrlSync, getX, rotatorActionCreator, translateX, translateXAsync) {
	        var _this = this;
	        this.$attrs = $attrs;
	        this.$compile = $compile;
	        this.$element = $element;
	        this.$http = $http;
	        this.$interval = $interval;
	        this.$location = $location;
	        this.$q = $q;
	        this.$scope = $scope;
	        this.$timeout = $timeout;
	        this.$transclude = $transclude;
	        this.debounce = debounce;
	        this.getFromUrlSync = getFromUrlSync;
	        this.getX = getX;
	        this.rotatorActionCreator = rotatorActionCreator;
	        this.translateX = translateX;
	        this.translateXAsync = translateXAsync;
	        this.storeOnChange = function (state) {
	            if (state.lastTriggeredByAction instanceof window_actions_1.KeyDownAction)
	                _this.onKeyDown({ keyCode: state.lastTriggeredByAction.keyCode });
	            if (state.lastTriggeredByAction instanceof window_actions_1.ResizeAction) { }
	        };
	        this.next = function () { return _this.rotatorActionCreator.next(_this.id); };
	        this.previous = function () { return _this.rotatorActionCreator.previous(_this.id); };
	        this.ngOnInit = function () {
	            _this.$element.find(".view-port").css("width", _this.width);
	            var fragment = document.createDocumentFragment();
	            for (var i = 0; i < _this.items.length; i++) {
	                var childScope = _this.$scope.$new(false);
	                childScope[_this.$attrs["rotatorForName"] || "rotatorItem"] = _this.items[i];
	                childScope.width = _this.width;
	                childScope.height = _this.height;
	                childScope.$$index = i;
	                childScope.$$isFirst = (i === 0);
	                childScope.$$isLast = (i === _this.items.length - 1);
	                var slide = angular.element(_this.template);
	                slide.attr("ng-swipe-left", "vm.swipeLeft()");
	                slide.attr("ng-swipe-right", "vm.swipeRight()");
	                var itemContent = _this.$compile(slide)(childScope);
	                itemContent.addClass("slide");
	                fragment.appendChild(itemContent[0]);
	            }
	            _this.containerNavtiveElement.appendChild(fragment);
	            _this.turnOffTransitions();
	            if (_this.queryStringParam && _this.queryStringParamIndex != 0) {
	                for (var i = _this.slideNavtiveElements.length - 1; i >= 0; i--) {
	                    var initialMoveX = (-1) * (_this.queryStringParamIndex * (Number(_this.width)));
	                    if (i < _this.queryStringParamIndex - _this.buffer) {
	                        _this.translateX(_this.slideNavtiveElements[i], initialMoveX + Number(_this.width) * _this.items.length);
	                    }
	                    else {
	                        _this.translateX(_this.slideNavtiveElements[i], initialMoveX);
	                    }
	                }
	                _this.currentIndex = _this.queryStringParamIndex;
	            }
	            else {
	                _this.currentIndex = 0;
	                var desiredX = Number(_this.width) * (-1);
	                var delta = desiredX - ((_this.items.length - 1) * Number(_this.width));
	                _this.translateX(_this.rendererdNodes[_this.items.length - 1].node, delta);
	                _this.isAnimating = false;
	            }
	            setTimeout(function () { _this.turnOnTransitions(); });
	        };
	        this.onKeyDown = function (options) {
	            switch (options.keyCode) {
	                case 37:
	                    _this.onPreviousAsyncDebounce();
	                    break;
	                case 39:
	                    _this.onNextAsyncDebounce();
	                    break;
	            }
	        };
	        this.onLocationChangeSuccess = function () {
	            if (_this.currentIndex != -1
	                && _this.items[_this.currentIndex][_this.$attrs["querySearchField"] || 'id'] != _this.queryStringParam
	                && _this.queryStringParamIndex != _this.currentIndex) {
	                //TO DO: Turn off transitions for manual manipulation of location bar
	                if (_this.currentIndex === _this.items.length - 1 && _this.queryStringParamIndex === 0)
	                    return _this.onNextAsync();
	                if (_this.currentIndex === 0 && _this.queryStringParamIndex === _this.items.length - 1)
	                    return _this.onPreviousAsync();
	                if ((_this.currentIndex - _this.queryStringParamIndex) < 0) {
	                    return _this.onNextAsync();
	                }
	                else {
	                    return _this.onPreviousAsync();
	                }
	            }
	        };
	        this.onPreviousAsyncDebounce = function () { _this.debounce(_this.onPreviousAsync, 10)(); };
	        this.swipeLeft = function () { return _this.onNextAsyncDebounce(); };
	        this.swipeRight = function () { return _this.onPreviousAsyncDebounce(); };
	        this.onPreviousAsync = function () {
	            return _this.move({ x: (Number(_this.width)) }).then(function () {
	                _this.turnOffTransitions();
	                var desiredX = Number(_this.width) * (-1);
	                var delta = desiredX - _this.rendererdNodes[_this.items.length - 1].offsetLeft;
	                _this.translateX(_this.rendererdNodes[_this.items.length - 1].node, delta);
	                _this.inTransition = true;
	                _this.currentIndex = (_this.currentIndex === 0) ? _this.items.length - 1 : _this.currentIndex - 1;
	                setTimeout(function () {
	                    _this.turnOnTransitions();
	                    _this.inTransition = false;
	                }, 300);
	            });
	        };
	        this.onNextAsyncDebounce = function () { _this.debounce(_this.onNextAsync, 10)(); };
	        this.onNextAsync = function () {
	            return _this.move({ x: (-1) * (Number(_this.width)) }).then(function () {
	                _this.turnOffTransitions();
	                var desiredX = Number(_this.width) * (_this.items.length - 2);
	                var delta = desiredX - _this.rendererdNodes[0].offsetLeft;
	                _this.translateX(_this.rendererdNodes[0].node, delta);
	                _this.inTransition = true;
	                _this.currentIndex = (_this.currentIndex === _this.items.length - 1) ? 0 : _this.currentIndex + 1;
	                setTimeout(function () {
	                    _this.turnOnTransitions();
	                    _this.inTransition = false;
	                }, 300);
	            });
	        };
	        this.move = function (options) {
	            var deferred = _this.$q.defer();
	            if (!_this.isAnimating && !_this.inTransition) {
	                var promises = [];
	                _this.isAnimating = true;
	                if (options.x < 0) {
	                    for (var i = _this.slideNavtiveElements.length - 1; i > -1; i--) {
	                        promises.push(_this.translateXAsync({ element: _this.slideNavtiveElements[i], x: (_this.getX(_this.slideNavtiveElements[i]) + options.x) }));
	                    }
	                }
	                if (options.x >= 0) {
	                    for (var i = 0; i < _this.slideNavtiveElements.length; i++) {
	                        promises.push(_this.translateXAsync({ element: _this.slideNavtiveElements[i], x: (_this.getX(_this.slideNavtiveElements[i]) + options.x) }));
	                    }
	                }
	                _this.$q.all(promises).then(function () {
	                    _this.isAnimating = false;
	                    deferred.resolve();
	                });
	            }
	            else {
	                deferred.reject();
	            }
	            return deferred.promise;
	        };
	        this.dispose = function () {
	            angular.element(_this.containerNavtiveElement).find(".slide").remove();
	            _this.containerNavtiveElement.innerHTML = "";
	            _this.$element[0].innerHTML = null;
	            _this.$element = null;
	            _this.$attrs = null;
	            _this.clone = null;
	            delete _this.$element;
	            delete _this.clone;
	        };
	        this.turnOffTransitions = function () { _this.$element.addClass("notransition"); };
	        this._currentIndex = -1;
	        this._template = null;
	    }
	    Object.defineProperty(RotatorComponent.prototype, "buffer", {
	        get: function () { return 1; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(RotatorComponent.prototype, "queryStringParam", {
	        get: function () { return this.$location.search()[this.$attrs["querySearchField"] || 'id']; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(RotatorComponent.prototype, "queryStringParamIndex", {
	        get: function () {
	            var value = -1;
	            for (var i = 0; i < this.items.length; i++) {
	                if (this.items[i][this.$attrs["querySearchField"] || 'id'] == this.queryStringParam) {
	                    value = i;
	                }
	            }
	            return value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    RotatorComponent.prototype.atBegining = function () { return this.currentIndex == 0; };
	    RotatorComponent.prototype.atEnd = function () { return this.currentIndex == this.items.length - 1; };
	    RotatorComponent.prototype.turnOnTransitions = function () { this.$element.removeClass("notransition"); };
	    Object.defineProperty(RotatorComponent.prototype, "slideNavtiveElements", {
	        get: function () { return this.containerNavtiveElement.children; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(RotatorComponent.prototype, "currentIndex", {
	        get: function () { return this._currentIndex; },
	        set: function (value) {
	            this._currentIndex = value;
	            this.$scope.$emit("componentUpdate", { scope: this.$scope });
	            var url = this.items[this.currentIndex][this.$attrs["querySearchField"] || 'id'];
	            this.$location.search(this.$attrs["querySearchField"] || 'id', url);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(RotatorComponent.prototype, "template", {
	        get: function () {
	            if (this._template != null)
	                return this._template;
	            if (this.$attrs["contentUrl"]) {
	                this._template = this.getFromUrlSync({ url: this.$attrs["contentUrl"] });
	            }
	            else {
	                this._template = this.clone;
	            }
	            return this._template;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(RotatorComponent.prototype, "containerNavtiveElement", {
	        get: function () { return this.$element.find(".container")[0]; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(RotatorComponent.prototype, "rendererdNodes", {
	        get: function () {
	            var renderedNodes = [];
	            for (var i = 0; i < this.slideNavtiveElements.length; i++) {
	                var x = this.getX(this.slideNavtiveElements[i]);
	                var offsetLeft = this.slideNavtiveElements[i].offsetLeft;
	                var left = x + offsetLeft;
	                var node = this.slideNavtiveElements[i];
	                renderedNodes.push({
	                    x: x,
	                    offsetLeft: offsetLeft,
	                    left: left,
	                    node: node
	                });
	            }
	            return renderedNodes.sort(function (a, b) {
	                return a.left - b.left;
	            });
	        },
	        enumerable: true,
	        configurable: true
	    });
	    RotatorComponent = __decorate([
	        core_1.Component({
	            template: __webpack_require__(152),
	            styles: __webpack_require__(153),
	            selector: "rotator",
	            transclude: "element",
	            inputs: [
	                "height",
	                "items",
	                "nextButtonImageUrl",
	                "previousButtonImageUrl",
	                "width"
	            ],
	            viewProviders: ["$attrs",
	                "$compile",
	                "$element",
	                "$http",
	                "$interval",
	                "$location",
	                "$q",
	                "$scope",
	                "$timeout",
	                "$transclude",
	                "debounce",
	                "getFromUrlSync",
	                "getX",
	                "rotatorActionCreator",
	                "translateX",
	                "translateXAsync"],
	            changeDetection: core_1.ChangeDetectionStrategy.OnPush
	        }), 
	        __metadata('design:paramtypes', [Object, Function, Object, Function, Function, Object, Function, Object, Function, Function, Function, Function, Function, rotator_action_creator_1.RotatorActionCreator, Function, Function])
	    ], RotatorComponent);
	    return RotatorComponent;
	}());
	exports.RotatorComponent = RotatorComponent;


/***/ },
/* 149 */
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
	var core_1 = __webpack_require__(1);
	var rotator_actions_1 = __webpack_require__(150);
	var RotatorActionCreator = (function () {
	    function RotatorActionCreator(dispatcher, guid) {
	        var _this = this;
	        this.dispatcher = dispatcher;
	        this.guid = guid;
	        this.next = function (id) { return _this.dispatcher.dispatch(new rotator_actions_1.RotatorNextAction(id)); };
	        this.previous = function (id) { return _this.dispatcher.dispatch(new rotator_actions_1.RotatorPreviousAction(id)); };
	    }
	    RotatorActionCreator = __decorate([
	        core_1.Service({
	            serviceName: "rotatorActionCreator",
	            viewProviders: ["dispatcher", "guid"]
	        }), 
	        __metadata('design:paramtypes', [Object, Object])
	    ], RotatorActionCreator);
	    return RotatorActionCreator;
	}());
	exports.RotatorActionCreator = RotatorActionCreator;


/***/ },
/* 150 */
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
	var core_1 = __webpack_require__(1);
	var RotatorNextAction = (function () {
	    function RotatorNextAction(id) {
	        this.id = id;
	    }
	    RotatorNextAction = __decorate([
	        core_1.Action({
	            type: "rotator.rotatorNextAction"
	        }), 
	        __metadata('design:paramtypes', [String])
	    ], RotatorNextAction);
	    return RotatorNextAction;
	}());
	exports.RotatorNextAction = RotatorNextAction;
	var RotatorPreviousAction = (function () {
	    function RotatorPreviousAction(id) {
	        this.id = id;
	    }
	    RotatorPreviousAction = __decorate([
	        core_1.Action({
	            type: "rotator.rotatorPreviousAction"
	        }), 
	        __metadata('design:paramtypes', [String])
	    ], RotatorPreviousAction);
	    return RotatorPreviousAction;
	}());
	exports.RotatorPreviousAction = RotatorPreviousAction;


/***/ },
/* 151 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(1);
	core_1.Action({
	    type: "window.resizeAction"
	});
	var ResizeAction = (function () {
	    function ResizeAction(innerWidth) {
	        this.innerWidth = innerWidth;
	    }
	    return ResizeAction;
	}());
	exports.ResizeAction = ResizeAction;
	core_1.Action({
	    type: "window.keyDownAction"
	});
	var KeyDownAction = (function () {
	    function KeyDownAction(keyCode) {
	        this.keyCode = keyCode;
	    }
	    return KeyDownAction;
	}());
	exports.KeyDownAction = KeyDownAction;


/***/ },
/* 152 */
/***/ function(module, exports) {

	module.exports = "<div class='rotator'>            \r\n    <div class='view-port'>        \r\n        <div class='container'></div>\r\n        <div class='previous-arrow' data-ng-click='vm.onPreviousAsyncDebounce()'>&nbsp;<img class=\"previous-arrow-img\" data-ng-src='{{ vm.previousButtonImageUrl }}' /></div>\r\n        <div class='next-arrow' data-ng-click='vm.onNextAsyncDebounce()'>&nbsp;<img class=\"next-arrow-img\" data-ng-src='{{ vm.nextButtonImageUrl }}' /></div>        \r\n    </div>    \r\n\r\n</div>"

/***/ },
/* 153 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(154);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(36)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./rotator.component.css", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./rotator.component.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 154 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(35)();
	// imports


	// module
	exports.push([module.id, ".slide { \r\n    float: left;\r\n    position: relative;\r\n    transition: transform 0.5s cubic-bezier(0.1, 0.1, 0.25, 0.9) 0s; \r\n} \r\n\r\n.rotator.notransition .slide { \r\n  transition: none !important; } \r\n\r\n.rotator .view-port { height:100%; \r\n   position: relative; \r\n   overflow-x: hidden; \r\n   overflow-y: hidden; \r\n } \r\n\r\n .rotator .view-port .container { \r\n   width: 99999px; \r\n } \r\n\r\n .rotator .view-port .previous-arrow img:hover \r\n .rotator .view-port .next-arrow img:hover { \r\n   opacity: .9; \r\n   transform: scale(1.51.5); \r\n } \r\n\r\n .rotator .view-port .slide { \r\n   position: relative; \r\n   float: left; \r\n   margin: 0 auto; \r\n } \r\n\r\n\r\n.rotator .view-port .next-arrow, \r\n.rotator .view-port .previous-arrow {\r\n    display: inline;\r\n    position: absolute;\r\n    top: 0;\r\n    left:0;\r\n    z-index: 25;\r\n    width: 100px;\r\n    height: 100%; \r\n}\r\n\r\n.rotator .view-port .next-arrow {        \r\n    left: calc(100% - 80px);\r\n}\r\n\r\n.rotator .view-port .next-arrow img,\r\n.rotator .view-port .previous-arrow img { \r\n   position: absolute; \r\n   top: calc(50% - 40px); \r\n   cursor: pointer; \r\n   left: 0; \r\n   z-index: 999; \r\n   opacity: .3; \r\n   transition: all .250s; \r\n } ", ""]);

	// exports


/***/ },
/* 155 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var rotator_actions_1 = __webpack_require__(150);
	exports.rotatorPreviousReducer = function (state, action) {
	    if (action instanceof rotator_actions_1.RotatorPreviousAction) { }
	    return state;
	};
	exports.rotatorNextReducer = function (state, action) {
	    if (action instanceof rotator_actions_1.RotatorNextAction) { }
	    return state;
	};


/***/ },
/* 156 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	__webpack_require__(1);
	var core_1 = __webpack_require__(1);
	var social_share_component_1 = __webpack_require__(157);
	var social_share_list_component_1 = __webpack_require__(161);
	var social_share_action_creator_1 = __webpack_require__(165);
	var reducers = __webpack_require__(166);
	var actions = __webpack_require__(167);
	var app = angular.module("app.socialShare", [
	    "app.core"
	]);
	core_1.provide(app, social_share_action_creator_1.SocialShareActionCreator);
	app.component(social_share_component_1.SocialShareComponent);
	app.component(social_share_list_component_1.SocialShareListComponent);
	app.config(["reducersProvider", function (reducersProvider) {
	        for (var reducer in reducers) {
	            reducersProvider.configure(reducers[reducer]);
	        }
	    }]);
	for (var action in actions) {
	    core_1.provideAction(app, actions[action]);
	}


/***/ },
/* 157 */
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
	var core_1 = __webpack_require__(1);
	var SocialShareComponent = (function () {
	    function SocialShareComponent() {
	    }
	    SocialShareComponent = __decorate([
	        core_1.Component({
	            template: __webpack_require__(158),
	            styles: [__webpack_require__(159)],
	            selector: "social-share",
	            changeDetection: core_1.ChangeDetectionStrategy.OnPush
	        }), 
	        __metadata('design:paramtypes', [])
	    ], SocialShareComponent);
	    return SocialShareComponent;
	}());
	exports.SocialShareComponent = SocialShareComponent;


/***/ },
/* 158 */
/***/ function(module, exports) {

	module.exports = "<div class=\"social-share\">\r\n\r\n</div>\r\n"

/***/ },
/* 159 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(160);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(36)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./social-share.component.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./social-share.component.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 160 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(35)();
	// imports


	// module
	exports.push([module.id, "", ""]);

	// exports


/***/ },
/* 161 */
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
	var core_1 = __webpack_require__(1);
	var SocialShareListComponent = (function () {
	    function SocialShareListComponent() {
	    }
	    SocialShareListComponent = __decorate([
	        core_1.Component({
	            template: __webpack_require__(162),
	            styles: [__webpack_require__(163)],
	            selector: "social-share-list",
	            changeDetection: core_1.ChangeDetectionStrategy.OnPush
	        }), 
	        __metadata('design:paramtypes', [])
	    ], SocialShareListComponent);
	    return SocialShareListComponent;
	}());
	exports.SocialShareListComponent = SocialShareListComponent;


/***/ },
/* 162 */
/***/ function(module, exports) {

	module.exports = "<div class=\"social-share-list\">\r\n\r\n</div>\r\n"

/***/ },
/* 163 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(164);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(36)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./social-share-list.component.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./social-share-list.component.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 164 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(35)();
	// imports


	// module
	exports.push([module.id, "", ""]);

	// exports


/***/ },
/* 165 */
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
	var core_1 = __webpack_require__(1);
	var modal_action_creator_1 = __webpack_require__(38);
	var SocialShareActionCreator = (function () {
	    function SocialShareActionCreator(dispatcher, guid, invokeAsync, modalActionCreator) {
	        this.dispatcher = dispatcher;
	        this.guid = guid;
	        this.invokeAsync = invokeAsync;
	        this.modalActionCreator = modalActionCreator;
	    }
	    SocialShareActionCreator = __decorate([
	        core_1.Service({
	            serviceName: "socialShareActionCreator",
	            viewProviders: ["dispatcher", "guid", "invokeAsync", "modalActionCreator"]
	        }), 
	        __metadata('design:paramtypes', [Object, Object, Object, modal_action_creator_1.ModalActionCreator])
	    ], SocialShareActionCreator);
	    return SocialShareActionCreator;
	}());
	exports.SocialShareActionCreator = SocialShareActionCreator;


/***/ },
/* 166 */
/***/ function(module, exports) {

	"use strict";


/***/ },
/* 167 */
/***/ function(module, exports) {

	"use strict";
	var Default = (function () {
	    function Default() {
	    }
	    return Default;
	}());
	exports.Default = Default;


/***/ },
/* 168 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	__webpack_require__(1);
	var core_1 = __webpack_require__(1);
	var tag_list_component_1 = __webpack_require__(169);
	var tag_action_creator_1 = __webpack_require__(173);
	var reducers = __webpack_require__(174);
	var actions = __webpack_require__(175);
	var app = angular.module("app.tag", [
	    "app.core"
	]);
	core_1.provide(app, tag_action_creator_1.TagActionCreator);
	app.component(tag_list_component_1.TagListComponent);
	app.config(["reducersProvider", function (reducersProvider) {
	        for (var reducer in reducers) {
	            reducersProvider.configure(reducers[reducer]);
	        }
	    }]);
	for (var action in actions) {
	    core_1.provideAction(app, actions[action]);
	}


/***/ },
/* 169 */
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
	var core_1 = __webpack_require__(1);
	var TagListComponent = (function () {
	    function TagListComponent() {
	    }
	    TagListComponent = __decorate([
	        core_1.Component({
	            template: __webpack_require__(170),
	            styles: [__webpack_require__(171)],
	            selector: "tag-list",
	            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
	            inputs: ["tags"]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], TagListComponent);
	    return TagListComponent;
	}());
	exports.TagListComponent = TagListComponent;


/***/ },
/* 170 */
/***/ function(module, exports) {

	module.exports = "<div class=\"tag-list\">\r\n\r\n</div>\r\n"

/***/ },
/* 171 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(172);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(36)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./tag-list.component.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./tag-list.component.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 172 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(35)();
	// imports


	// module
	exports.push([module.id, "", ""]);

	// exports


/***/ },
/* 173 */
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
	var core_1 = __webpack_require__(1);
	var modal_action_creator_1 = __webpack_require__(38);
	var TagActionCreator = (function () {
	    function TagActionCreator(dispatcher, guid, invokeAsync, modalActionCreator) {
	        this.dispatcher = dispatcher;
	        this.guid = guid;
	        this.invokeAsync = invokeAsync;
	        this.modalActionCreator = modalActionCreator;
	    }
	    TagActionCreator = __decorate([
	        core_1.Service({
	            serviceName: "tagActionCreator",
	            viewProviders: ["dispatcher", "guid", "invokeAsync", "modalActionCreator"]
	        }), 
	        __metadata('design:paramtypes', [Object, Object, Object, modal_action_creator_1.ModalActionCreator])
	    ], TagActionCreator);
	    return TagActionCreator;
	}());
	exports.TagActionCreator = TagActionCreator;


/***/ },
/* 174 */
/***/ function(module, exports) {

	"use strict";


/***/ },
/* 175 */
/***/ function(module, exports) {

	"use strict";
	var Default = (function () {
	    function Default() {
	    }
	    return Default;
	}());
	exports.Default = Default;


/***/ },
/* 176 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	__webpack_require__(1);
	var core_1 = __webpack_require__(1);
	var window_action_creator_1 = __webpack_require__(177);
	var reducers = __webpack_require__(178);
	var actions = __webpack_require__(151);
	var app = angular.module("app.window", [
	    "app.core"
	]);
	core_1.provide(app, window_action_creator_1.WindowActionCreator);
	app.config(["reducersProvider", function (reducersProvider) {
	        for (var reducer in reducers) {
	            reducersProvider.configure(reducers[reducer]);
	        }
	    }]);
	for (var action in actions) {
	    core_1.provideAction(app, actions[action]);
	}
	app.run(["windowActionCreator", function (windowActionCreator) { }]);


/***/ },
/* 177 */
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
	var core_1 = __webpack_require__(1);
	var window_actions_1 = __webpack_require__(151);
	var WindowActionCreator = (function () {
	    function WindowActionCreator($window, dispatcher, guid, invokeAsync) {
	        var _this = this;
	        this.$window = $window;
	        this.dispatcher = dispatcher;
	        this.guid = guid;
	        this.invokeAsync = invokeAsync;
	        core_1.Observable
	            .fromEvent($window, 'resize')
	            .map(function () { return $window.innerWidth; })
	            .debounce(100)
	            .distinctUntilChanged()
	            .subscribe(function (innderWidth) {
	            return _this.dispatcher.dispatch(new window_actions_1.ResizeAction(innderWidth));
	        });
	        core_1.Observable
	            .fromEvent($window, 'keydown')
	            .map(function (e) { return e.keyCode; })
	            .debounce(100)
	            .subscribe(function (keyCode) { return _this.dispatcher.dispatch(new window_actions_1.KeyDownAction(keyCode)); });
	    }
	    WindowActionCreator = __decorate([
	        core_1.Service({
	            serviceName: "windowActionCreator",
	            viewProviders: ["$window", "dispatcher", "guid", "invokeAsync", "modalActionCreator"]
	        }), 
	        __metadata('design:paramtypes', [Object, Object, Object, Object])
	    ], WindowActionCreator);
	    return WindowActionCreator;
	}());
	exports.WindowActionCreator = WindowActionCreator;


/***/ },
/* 178 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var window_actions_1 = __webpack_require__(151);
	var core_1 = __webpack_require__(1);
	exports.breakpointsReducer = function (state, action) {
	    if (action instanceof window_actions_1.ResizeAction) {
	        if (core_1.isBetween(action.innerWidth, 0, 768))
	            state.breakpointName = "x-small";
	        if (core_1.isBetween(action.innerWidth, 769, 992))
	            state.breakpointName = "small";
	        if (core_1.isBetween(action.innerWidth, 0, 768))
	            state.breakpointName = "medium";
	        if (core_1.isBetween(action.innerWidth, 0, 768))
	            state.breakpointName = "large";
	        if (core_1.isBetween(action.innerWidth, 0))
	            state.breakpointName = "x-large";
	    }
	    return state;
	};


/***/ }
/******/ ]);