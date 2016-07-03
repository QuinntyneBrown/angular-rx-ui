import { CanActivate, ChangeDetectionStrategy, Component } from "../core";

@Component({
    template: require("./article-editor.component.html"),
    styles: [require("./article-editor.component.scss")],
    selector: "article-editor",
    inputs: ['entity', 'addOrUpdate', 'remove', 'create', 'selectAuthor'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArticleEditorComponent {
    constructor() {
        alert("works?");
    }

}


