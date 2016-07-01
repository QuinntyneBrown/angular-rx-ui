require("../core");

import { provide } from "../core";
import { AppService } from "./app.service";

var app = (<any>angular.module("app.app", [
    "app.core"    
]));

provide(app, AppService);


