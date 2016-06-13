/// <reference path="../node_modules/rx/ts/rx.all.d.ts" />

require("./components/core/core.module");

require("./components/backdrop/backdrop.module");
require("./components/counter/counter.module");
require("./components/flip-card/flip-card.module");
require("./components/modal/modal.module");
require("./components/nav-menu/nav-menu.module");
require("./components/rotator/rotator.module");
require("./components/window/window.module");


var app = angular
    .module("components", [
        "app.core",
        "app.counter",
        "app.flipCard",
        "app.modal",
        "app.navMenu",
        "app.rotator",   
        "app.window"                        
    ]);


app.config([() => {
    FastClick.attach(document.body);
}]);


