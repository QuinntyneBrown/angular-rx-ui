import { CanActivate, ChangeDetectionStrategy, Component } from "../core";
import { AuthorActionCreator } from "./author.action-creator";
import { ModalActionCreator } from "../modal/modal.action-creator";
import { Author } from "./author.model";

@Component({
    template: require("./author-create-modal.component.html"),
    styles: require("./author-create-modal.component.scss"),
    selector: "author-create-modal",
    viewProviders: ["authorActionCreator","invokeAsync","modalActionCreator"],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthorCreateModalComponent {
    constructor(private authorActionCreator: AuthorActionCreator, private invokeAsync, private modalActionCreator: ModalActionCreator) { }

    create = () => {
        this.invokeAsync({
            action: this.authorActionCreator.create,
            params: { entity: this.entity }
        }).then(results => {
            this.close();
        });
    }

    close = () => this.modalActionCreator.close();

    entity: Author;
}
