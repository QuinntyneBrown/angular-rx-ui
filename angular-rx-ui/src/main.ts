/// <reference path="../node_modules/rx/ts/rx.all.d.ts" />

require("./components/core");

require("./sass");

require("./components/ads");
require("./components/article");
require("./components/author");
require("./components/backdrop");
require("./components/button");
require("./components/category");
require("./components/carousel-action-panel");
require("./components/counter");
require("./components/flip-card");
require("./components/flyout");
require("./components/hamburger-button");
require("./components/modal");
require("./components/nav-menu");
require("./components/ngrx-footer");
require("./components/ngrx-header");
require("./components/paged-list");
require("./components/panel");
require("./components/picture");
require("./components/popover");
require("./components/rotator");
require("./components/social-share");
require("./components/tabs");
require("./components/tag");
require("./components/window");

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