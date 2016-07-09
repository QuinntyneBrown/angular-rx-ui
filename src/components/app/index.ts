require("../core");

import { provide, bootstrap } from "../core";

import { PropertyHelper } from "./property-helper.service";

var app = (<any>angular.module("app.app", [
    "app.core"    
]));

provide(app, PropertyHelper);


export * from "./property-helper.service";


