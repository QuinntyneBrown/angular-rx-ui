import { CanActivate, ChangeDetectionStrategy, Component } from "../core";

@Component({
    template: require("./spinner.component.html"),
    styles: [require("./spinner.component.scss")],
    selector: "spinner",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpinnerComponent {    
    storeOnChange = (state) => this.visible = state.spinnerVisible;
    private _visible: boolean;
    public get visible() { return this._visible; }
    public set visible(value: boolean) { this._visible = value; }
}