import { CanActivate, ChangeDetectionStrategy, Component } from "../core";

@Component({
    template: require("./author-list.component.html"),
    styles: [require("./author-list.component.scss")],
    selector: "author-list",
    inputs: ['entities','edit','remove'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthorListComponent {
    constructor() { }     
}
