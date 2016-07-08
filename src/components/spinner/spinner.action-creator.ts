import { IDispatcher, BaseActionCreator, Service } from "../core";
import { ShowSpinnerAction, HideSpinnerAction } from "./spinner.actions";

@Service({
    serviceName: "spinnerActionCreator",
    viewProviders: ["dispatcher", "guid", "invokeAsync"]
})
export class SpinnerActionCreator {
    constructor(private dispatcher: IDispatcher, private guid, private invokeAsync) { }    

    public show = () => this.dispatcher.dispatch(new ShowSpinnerAction());

    public hide = () => this.dispatcher.dispatch(new HideSpinnerAction());
}



