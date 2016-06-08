import { Component, ChangeDetectionStrategy } from "../core";
import { ModalActionCreator } from "./modal.action-creator";
import * as actions from "./modal.actions";

@Component({
    template: require("./modal.component.html"),
    styles: [require("./modal.component.css")],
    selector: "modal",
    transclude: {
        'title': '?modalTitle',
        'content': '?modalContent'
    },
    viewProviders: [
        '$attrs',
        '$element',
        'modalActionCreator'
    ]
})
export class ModalComponent {
    constructor(private $attrs: angular.IAttributes, private $element: angular.IAugmentedJQuery, private modalActionCreator: ModalActionCreator) { }    
    close = () => this.modalActionCreator.close();
}