﻿/// <reference path="../node_modules/rx/ts/rx.all.d.ts" />

require("./components/core");

require("./components/ads");
require("./components/article");
require("./components/author");
require("./components/backdrop");
require("./components/category");
require("./components/counter");
require("./components/flip-card");
require("./components/modal");
require("./components/nav-menu");
require("./components/paged-list");
require("./components/picture");
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
        "app.tabs",
        "app.tag",
        "app.window"                        
    ]);

app.config([() => {
    FastClick.attach(document.body);
}]);


export * from "./components/core";