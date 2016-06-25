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
//# sourceMappingURL=modal.service.js.map