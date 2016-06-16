import { Component, ChangeDetectionStrategy } from "../core";
import { PictureActionCreator } from "./picture.action-creator";

@Component({
    template: require("./picture-upload.component.html"),
    styles: require("./picture-upload.component.scss"),
    selector: "picture-upload",
    viewProviders: ["$element","pictureActionCreator"],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PictureUploadComponent {
    constructor(private $element: ng.IAugmentedJQuery,        
        private pictureActionCreator: PictureActionCreator
    ) { }

    ngOnInit = () => {
        this.drop.addEventListener("dragover", (dragEvent: DragEvent) => {
            dragEvent.stopPropagation();
            dragEvent.preventDefault();
        }, false);
        
        this.drop.addEventListener("drop", this.pictureActionCreator.upload, false);
    }

    ngOnDestroy = () => this.drop.removeEventListener("drop", this.pictureActionCreator.upload, false);

    get drop() {
        return this.$element.find(".drop-zone")[0];
    }
 
}