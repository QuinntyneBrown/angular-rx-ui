"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(require("./local-storage-manager-provider"));
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
        _super.call(this, initialState);
        this.localStorageManager = localStorageManager;
        this.reducers = reducers;
        this.onDispatcherNext = function (action) {
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
            return state;
        };
        this.functionToString = function (fn) {
            return fn.toString();
        };
        this.state = initialState;
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
//# sourceMappingURL=store.js.map