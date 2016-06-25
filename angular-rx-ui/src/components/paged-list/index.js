"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
require("../core");
require("./paged-list.scss");
var core_1 = require("../core");
var paged_list_actions_1 = require("./paged-list.actions");
var reducers = require("./paged-list.reducers");
__export(require("./paged-list.model"));
__export(require("./to-paged-list-from-in-memory"));
var app = angular.module("app.pagedList", [
    "app.core"
]);
core_1.provide(app, paged_list_actions_1.PagedListActionCreator);
app.config(["reducersProvider", function (reducersProvider) {
        for (var reducer in reducers) {
            reducersProvider.configure(reducers[reducer]);
        }
    }]);
//# sourceMappingURL=index.js.map