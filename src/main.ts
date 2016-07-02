/// <reference path="../node_modules/rx/ts/rx.all.d.ts" />

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
        "app.window"                        
    ]);

app.config([() => {
    FastClick.attach(document.body);
}]);


import * as _core from "./components/core";
import * as _modal from "./components/modal";

export const core = _core;
export const modal = _modal;