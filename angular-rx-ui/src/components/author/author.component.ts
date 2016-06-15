import { CanActivate, ChangeDetectionStrategy, Component } from "../core";

@Component({
    template: require("./author.component.html"),
    styles: [require("./author.component.scss")],
    selector: "author",
    changeDetection: ChangeDetectionStrategy.OnPush,
    inputs: [ "authorFullName" ]
})
export class AuthorComponent {}
