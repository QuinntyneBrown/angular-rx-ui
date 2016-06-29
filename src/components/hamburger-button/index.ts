require("../core");

import { provide, provideAction } from "../core";
import { HamburgerButtonComponent } from "./hamburger-button.component";

var app = (<any>angular.module("app.hamburgerButton", [
    "app.core"    
]));

app.component(HamburgerButtonComponent);