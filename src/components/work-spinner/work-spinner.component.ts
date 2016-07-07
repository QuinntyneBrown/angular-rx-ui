import { CanActivate, ChangeDetectionStrategy, Component } from "../core";

@Component({
    template: require("./work-spinner.component.html"),
    styles: [require("./work-spinner.component.scss")],
    selector: "work-spinner",
    inputs: ["src"],
    viewProviders: ["$element"],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class WorkSpinnerComponent {
    constructor(private $element: angular.IAugmentedJQuery) { }

    storeOnChange = state => this.isBusy = state.isBusy;

    private _isBusy: boolean;

    public get isBusy() {
        return this._isBusy;
    }

    public set isBusy(value) {
        if (!this._isBusy && value)
            this.$element.addClass("active");

        if (this._isBusy && !value) {
            this.$element.removeClass("active");

            this._isBusy = value;
        }
    }
}
