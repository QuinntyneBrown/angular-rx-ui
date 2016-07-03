import { CanActivate, ChangeDetectionStrategy, Component } from "../core";
import { AuthorActionCreator } from "./author.action-creator";
import { Author } from "./author.model";

@Component({
    template: require("./author-picker-modal.component.html"),
    styles: require("./author-picker-modal.component.scss"),
    selector: "author-picker-modal",
    viewProviders: ["authorActionCreator"],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthorPickerModalComponent {
    constructor(private authorActionCreator: AuthorActionCreator) { }

    storeOnChange = state => {
        this.entities = state.authors;
    }

    entities: Array<Author>;

    select = (entity: Author) => {
        this.authorActionCreator.select(entity);
        this.close();
    };

    close = () => this.authorActionCreator.closeModal();

}
