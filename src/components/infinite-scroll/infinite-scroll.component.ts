import { CanActivate, ChangeDetectionStrategy, Component } from "../core";

@Component({
    template: require("./infinite-scroll.component.html"),
    styles: [require("./infinite-scroll.component.scss")],
    selector: "infinite-scroll",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class InfiniteScrollComponent { }
