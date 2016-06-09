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
var carousel_actions_1 = require("./carousel.actions");
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
            template: require("./carousel.component.html"),
            styles: [require("./carousel.component.scss")],
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
//# sourceMappingURL=carousel.component.js.map