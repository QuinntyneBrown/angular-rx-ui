import { CanActivate, ChangeDetectionStrategy, Component } from "../core";

@Component({
    template: require("./tag-list.component.html"),
    styles: [require("./tag-list.component.scss")],
    selector: "tag-list",
    changeDetection: ChangeDetectionStrategy.OnPush,
    inputs:["tags"]
})
export class TagListComponent { }
