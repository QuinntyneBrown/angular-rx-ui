/// <reference path="../node_modules/rx/ts/rx.all.d.ts" />

require("./components/core/core.module");
require("./components/counter/counter.module");
require("./components/modal/modal.module");

var app = angular
    .module("components", [
        "app.core",
        "app.counter",
        "app.modal"
    ]);


