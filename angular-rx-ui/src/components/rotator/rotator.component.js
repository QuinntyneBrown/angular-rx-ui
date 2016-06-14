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
var rotator_action_creator_1 = require("./rotator.action-creator");
var window_actions_1 = require("../window/window.actions");
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
            template: require("./rotator.component.html"),
            styles: require("./rotator.component.css"),
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
//# sourceMappingURL=rotator.component.js.map