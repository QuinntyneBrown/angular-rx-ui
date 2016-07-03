require("../core");

import { AuthorEditorComponent } from "./author-editor.component";
import { AuthorPickerModalComponent } from "./author-picker-modal.component";
import { AuthorListComponent } from "./author-list.component";
import { AuthorComponent } from "./author.component";
import { AuthorActionCreator } from "./author.action-creator";
import { AuthorService } from "./author.service";
import * as reducers from "./author.reducers";
import { provide } from "../core";

var app = (<any>angular.module("app.author", [
    "app.core"    
]));

provide(app, AuthorActionCreator);
provide(app, AuthorService);

app.component(AuthorEditorComponent);
app.component(AuthorListComponent);
app.component(AuthorComponent);
app.component(AuthorPickerModalComponent);

app.config(["reducersProvider", reducersProvider => {	
    for (var reducer in reducers) { reducersProvider.configure(reducers[reducer]); }
}]);
