import { CanActivate, Component, ChangeDetectionStrategy } from "../core";
import * as actions from "./login.actions";

@Component({
    template: require("./login-container.component.html"),
    styles: [require("./login-container.component.scss")],
    selector: "login-container",
    viewProviders: ["loginRedirect"]
})
export class LoginContainerComponent {
    constructor(private loginRedirect) { }

    storeOnChange = state => {
        if (state.lastTriggeredByAction instanceof actions.LoginSuccessAction) {            
            this.loginRedirect.redirectPreLogin()
        }
    }
}
