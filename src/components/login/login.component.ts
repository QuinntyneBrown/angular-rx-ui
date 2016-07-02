import { CanActivate, Component, ChangeDetectionStrategy } from "../core";
import { LoginActionCreator } from "./login.action-creator";

@Component({
    template: require("./login.component.html"),
    styles: [require("./login.component.scss")],
    selector: "login",
    viewProviders: ["invokeAsync", "loginActionCreator"]
})
export class LoginComponent {
    constructor(private invokeAsync, private loginActionCreator: LoginActionCreator) { }
    
    tryToLogin = () => {
        this.invokeAsync({
            action: this.loginActionCreator.tryToLogin,
            params: { username: this.username, password: this.password }
        }).then(results => {
            this.loginActionCreator.loginSuccess();
        });
    }

    username;
    password;
}
