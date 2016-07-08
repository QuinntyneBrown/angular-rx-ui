import { CanActivate, ChangeDetectionStrategy, Component } from "../core";
import { Backdrop } from "../backdrop/backdrop.service";

@Component({
    template: require("./work-spinner.component.html"),
    styles: [require("./work-spinner.component.scss")],
    selector: "work-spinner",
    inputs: ["src"],
    viewProviders: ["$element","backdropService"],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class WorkSpinnerComponent {
    constructor(private $element: angular.IAugmentedJQuery, private backdropService: Backdrop) { }

    storeOnChange = state => this.isBusy = state.isBusy;

    private _isBusy: boolean;

    public get isBusy() {
        return this._isBusy;
    }

    public set isBusy(value) {
        if (!this._isBusy && value)
            this.backdropService.openAsync().then(() => this.$element.addClass("active"));
        
        if (this._isBusy && !value)
            this.backdropService.closeAsync().then(() => this.$element.removeClass("active"));

        this._isBusy = value;
    }    
}
