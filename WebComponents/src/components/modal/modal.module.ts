require("../core/core.module");
require("../backdrop/backdrop.module");

import { provide, provideAction } from "../core";
import { ModalActionCreator } from "./modal.action-creator";
import { Modal } from "./modal.service";
import * as reducers from "./modal.reducers";
import * as actions from "./modal.actions";
import { ModalComponent } from "./modal.component";
import { ModalTitleComponent } from "./modal-title.component";
import { ModalContentComponent } from "./modal-content.component";

var app = (<any>angular.module("app.modal", [
    "app.core",
    "app.backdrop"    
]));

provide(app, ModalActionCreator);
provide(app, Modal);
app.component(ModalComponent);
app.component(ModalTitleComponent);
app.component(ModalContentComponent);

app.config(["reducersProvider", reducersProvider => {
    for (var reducer in reducers) { reducersProvider.configure(reducers[reducer]); }
}]);

for (var action in actions) { provideAction(app, actions[action]); }


app.run(["modal", "modalActionCreator", (modal, modalActionCreator) => { }]);
