import { CanActivate, ChangeDetectionStrategy, Component } from "../core";
import { AuthorActionCreator } from "./author.action-creator";

@Component({
    template: require("./author.component.html"),
    styles: require("./author.component.scss"),
    selector: "author",
    viewProviders: ["authorActionCreator"],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthorComponent {
    constructor(private authorActionCreator: AuthorActionCreator) { }
  
}
