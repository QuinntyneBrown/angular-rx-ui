import { Component, ChangeDetectionStrategy } from "../core";
import { ModalActionCreator } from "./modal.action-creator";

@Component({
    template: require("./modal-content.component.html"),
    styles: [require("./modal-content.component.css")],
    selector: "modal-content",
    transclude: true,
    viewProviders: ["$attrs", "modalActionCreator"]
})
export class ModalContentComponent {
    constructor(private $attrs: angular.IAttributes, private modalActionCreator: ModalActionCreator) { }
    storeOnChange = state => { }
}