import { Component, ChangeDetectionStrategy } from "../core";
import { ModalActionCreator } from "./modal.action-creator";

@Component({
    template: require("./modal-title.component.html"),
    styles: [require("./modal-title.component.css")],
    selector: "modal-title",
    transclude: true,
    viewProviders: ["$attrs", "modalActionCreator"]
})
export class ModalTitleComponent {
    constructor(private $attrs: angular.IAttributes, private modalActionCreator: ModalActionCreator) { }
    storeOnChange = state => { }
}