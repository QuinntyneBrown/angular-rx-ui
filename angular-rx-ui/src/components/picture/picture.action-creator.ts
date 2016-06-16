import { IDispatcher, BaseActionCreator, Service } from "../core";
import { ModalActionCreator } from "../modal/modal.action-creator";
import { PictureUploadAction } from "./picture.actions";

@Service({
    serviceName: "pictureActionCreator",
    viewProviders: ["dispatcher", "guid", "invokeAsync","modalActionCreator", "pictureService"]
})
export class PictureActionCreator {
    constructor(private dispatcher: IDispatcher,
        private guid,
        private invokeAsync,
        private modalActionCreator: ModalActionCreator,
        private pictureService
    ) { }    

    public upload = (dragEvent: DragEvent) => {
        dragEvent.stopPropagation();
        dragEvent.preventDefault();
        let newId = this.guid();
        if (dragEvent.dataTransfer && dragEvent.dataTransfer.files) {
            var packageFiles = function (fileList: FileList) {
                var formData = new FormData();
                for (var i = 0; i < fileList.length; i++) {
                    formData.append(fileList[i].name, fileList[i]);
                }
                return formData;
            }
            this.pictureService
                .tryToUpload({ data: packageFiles(dragEvent.dataTransfer.files) })
                .then((response: any) => this.dispatcher.dispatch(new PictureUploadAction(newId, response.files)));
        }
        return newId;
    }
}



