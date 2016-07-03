import { CanActivate, ChangeDetectionStrategy, Component } from "../core";
import { toPageListFromInMemory } from "../paged-list/to-paged-list-from-in-memory";
import { IPagedList } from "../paged-list/ipaged-list.d";
import { Author } from "./author.model";

@Component({
    template: require("./author-paged-list.component.html"),
    styles: [require("./author-paged-list.component.scss")],
    selector: "author-paged-list",
    inputs: ['entities', 'edit', 'remove', 'pageNumber', 'pageSize'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthorPagedListComponent {
    constructor() { }

    ngOnInit = () => {
        //TODO: Sometimes nul here
        if (this.entities)
            this.pagedList = toPageListFromInMemory<Author>(this.entities, this.pageNumber, this.pageSize)
    };

    entities: Array<Author>;
    pagedList: IPagedList<Author>;
    pageNumber: number;
    pageSize: number;

    next = () => {
        if (this.pageNumber == this.pagedList.totalPages) {
            this.pageNumber = 1;
        } else {
            this.pageNumber = this.pageNumber + 1;
        }
        this.ngOnInit();
    }

    previous = () => {
        if (this.pageNumber == 1) {
            this.pageNumber = this.pagedList.totalPages;
        } else {
            this.pageNumber = this.pageNumber - 1;
        }
        this.ngOnInit();
    }
}
