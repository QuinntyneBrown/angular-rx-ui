import { CanActivate, ChangeDetectionStrategy, Component } from "../core";

@Component({
    template: require("./author-editor.component.html"),
    styles: [require("./author-editor.component.scss")],
    selector: "author-editor",
    inputs: ['entity','addOrUpdate','remove','create'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthorEditorComponent {}


