require("../core");

import { provide, provideAction } from "../core";
import { HeroComponent } from "./hero.component";

var app = (<any>angular.module("app.hero", [
    "app.core"    
]));

app.component(HeroComponent);