import { CanActivate, ChangeDetectionStrategy, Component } from "../core";

@Component({
    template: require("./file-explorer.component.html"),
    styles: [require("./file-explorer.component.scss")],
    selector: "file-explorer",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FileExplorerComponent {
    constructor() { }
}
