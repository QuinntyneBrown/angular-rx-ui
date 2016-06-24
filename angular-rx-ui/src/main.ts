﻿/// <reference path="../node_modules/rx/ts/rx.all.d.ts" />

require("./assets/sass");
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
        "app.modal",
        "app.navMenu",
        "app.ngrxHeader",
        "app.ngrxFooter",
        "app.pagedList",
        "app.panel",
        "app.popover",
        "app.picture",
        "app.rotator",   
        "app.socialShare",
        "app.tabs",
        "app.tag",
        "app.window"                        
    ]);

app.config([() => {
    FastClick.attach(document.body);
}]);


export * from "./components/core";