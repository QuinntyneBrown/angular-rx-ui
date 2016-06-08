/// <reference path="../node_modules/rx/ts/rx.all.d.ts" />
require("./components/core/core.module");
require("./components/backdrop/backdrop.module");
require("./components/counter/counter.module");
require("./components/modal/modal.module");
require("./components/tv-show/tv-show.module");
var app = angular
    .module("components", [
    "app.core",
    "app.counter",
    "app.tvShow"
]);
//# sourceMappingURL=main.js.map