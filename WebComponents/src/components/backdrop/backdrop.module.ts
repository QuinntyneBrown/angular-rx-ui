require("../core/core.module");

import { provide } from "../core";
import { Backdrop } from "./backdrop.service";

var app = (<any>angular.module("app.backdrop", [
    "app.core"
]));

provide(app, Backdrop);

app.run(["backdrop", backdrop => { }]);
