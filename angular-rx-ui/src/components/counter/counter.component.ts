import { CanActivate, ChangeDetectionStrategy, Component } from "../core";
import { CounterActionCreator } from "./counter.action-creator";

@Component({
    componentName:"counterComponent",
    template: require("./counter.component.html"),
    styles: [require("./counter.component.scss")],
    selector: "counter",
    changeDetection: ChangeDetectionStrategy.OnPush,
    viewProviders: ["counterActionCreator"]
})
export class CounterComponent {    
    constructor(private counterActionCreator: CounterActionCreator) { }
    
    storeOnChange = store => this.count = store.count || 0;
    increment = () => this.counterActionCreator.increment();
    decrement = () => this.counterActionCreator.decrement();
    count: number;
}
