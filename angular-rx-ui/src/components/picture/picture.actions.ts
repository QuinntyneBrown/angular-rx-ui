import { Action } from "../core";

@Action({
    type:"picture.pictureUploadAction"
})
export class PictureUploadAction { constructor(public id, public entities: Array<File>) { } }