require("../core");

import { provide, provideAction } from "../core";
import { RiverComponent } from "./river.component";

var app = (<any>angular.module("app.river", [
    "app.core"    
]));

app.component(RiverComponent);

