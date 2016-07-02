import { CanActivate, ChangeDetectionStrategy, Component } from "../core";

@Component({
    template: require("./user-list.component.html"),
    styles: [require("./user-list.component.scss")],
    selector: "user-list",
    inputs: ['entities','edit','remove'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserListComponent {
    constructor() { }     
}
