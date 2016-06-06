require("../core/core.module");

import { provide } from "../core";
import { HelloWorldComponent } from "./hello-world.component";

var app = (<any>angular.module("app.helloWorld", [
    "app.core"    
]));

app.component(HelloWorldComponent);

