import { CanActivate, ChangeDetectionStrategy, Component } from "../core";

@Component({
    template: require("./hello-world.component.html"),
    styles: [require("./hello-world.component.css")],
    selector: "hello-world",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HelloWorldComponent {
    constructor() { }
}
