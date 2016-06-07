import { CanActivate, ChangeDetectionStrategy, Component } from "../core";

@Component({
    template: require("./counter.component.html"),
    styles: [require("./counter.component.scss")],
    selector: "counter",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CounterComponent {    
    constructor() {

    }
}
