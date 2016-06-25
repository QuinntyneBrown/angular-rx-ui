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
var core_1 = require("../core");
var actions = require("./popover.actions");
var Popover = (function () {
    function Popover($compile, $document, $http, $q, $timeout, guid, position, store, template) {
        var _this = this;
        this.$compile = $compile;
        this.$document = $document;
        this.$http = $http;
        this.$q = $q;
        this.$timeout = $timeout;
        this.guid = guid;
        this.position = position;
        this.store = store;
        this.template = template;
        this.createInstance = function (options) {
            var deferred = _this.$q.defer();
            var instance = new Popover(_this.$compile, _this.$document, _this.$http, _this.$q, _this.$timeout, _this.guid, _this.position, _this.store, _this.template);
            instance.scope = options.scope;
            instance.triggerAugmentedJQuery = options.triggerAugmentedJQuery;
            _this.$q.all([_this.template.get({ templateUrl: options.templateUrl })]).then(function (resultsArray) {
                instance.templateHtml = resultsArray[0];
                deferred.resolve(instance);
            });
            return deferred.promise;
        };
        this.storeOnChange = function (state) {
            if (state.lastTriggeredByAction === actions.OpenPopoverAction) {
            }
            if (state.lastTriggeredByAction === actions.ClosePopoverAction) {
            }
        };
        this.setInitialCss = function () {
            _this.augmentedJQuery[0].setAttribute("style", "-webkit-transition: opacity " + _this.transitionDurationInMilliseconds + "ms ease-in-out;-o-transition: opacity " + _this.transitionDurationInMilliseconds + "ms ease-in-out;transition: opacity " + _this.transitionDurationInMilliseconds + "ms ease-in-out;");
            _this.augmentedJQuery[0].style.opacity = "0";
            _this.augmentedJQuery[0].style.position = "fixed";
            _this.augmentedJQuery[0].style.top = "0";
            _this.augmentedJQuery[0].style.left = "0";
            _this.augmentedJQuery[0].style.display = "block";
        };
        this.show = function () {
            var deferred = _this.$q.defer();
            _this.augmentedJQuery = _this.$compile(_this.templateHtml)(_this.scope.$new(true));
            _this.setInitialCss();
            _this.position.below(_this.triggerAugmentedJQuery[0], _this.augmentedJQuery[0], 30).then(function () {
                document.body.appendChild(_this.augmentedJQuery[0]);
                _this.$timeout(function () { _this.augmentedJQuery.css("opacity", 100); }, 100, false);
                deferred.resolve();
            });
            return deferred.promise;
        };
        this.hide = function () {
            var deferred = _this.$q.defer();
            _this.augmentedJQuery.css("opacity", 0);
            _this.augmentedJQuery[0].addEventListener('transitionend', function () {
                angular.element(_this.augmentedJQuery[0]).scope().$destroy();
                _this.augmentedJQuery[0].parentNode.removeChild(_this.augmentedJQuery[0]);
                deferred.resolve();
            }, false);
            return deferred.promise;
        };
        store.subscribe(this.storeOnChange);
    }
    Object.defineProperty(Popover.prototype, "transitionDurationInMilliseconds", {
        get: function () { return 1000; },
        enumerable: true,
        configurable: true
    });
    Popover = __decorate([
        core_1.Injectable(),
        core_1.Service({
            serviceName: "popover",
            viewProviders: ["$compile", "$document", "$http", "$q", "$timeout", "guid", "position", "store", "template"]
        }), 
        __metadata('design:paramtypes', [Function, Object, Function, Function, Function, Object, Object, core_1.Store, Object])
    ], Popover);
    return Popover;
}());
exports.Popover = Popover;
//# sourceMappingURL=popover.service.js.map