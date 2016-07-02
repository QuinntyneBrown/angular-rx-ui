/// <reference path="../node_modules/rx/ts/rx.all.d.ts" />
"use strict";
require("./assets/scss");
require("./components");
var app = angular
    .module("components", [
    "app.ads",
    "app.article",
    "app.author",
    "app.backdrop",
    "app.button",
    "app.carouselActionPanel",
    "app.category",
    "app.core",
    "app.counter",
    "app.errorList",
    "app.flipCard",
    "app.flyout",
    "app.hamburgerButton",
    "app.hero",
    "app.login",
    "app.modal",
    "app.navMenu",
    "app.pagedList",
    "app.panel",
    "app.popover",
    "app.picture",
    "app.river",
    "app.rotator",
    "app.socialShare",
    "app.tabs",
    "app.tag",
    "app.user",
    "app.window"
]);
app.config([function () {
        FastClick.attach(document.body);
    }]);
var _core = require("./components/core");
var _modal = require("./components/modal");
exports.core = _core;
exports.modal = _modal;
//# sourceMappingURL=main.js.map