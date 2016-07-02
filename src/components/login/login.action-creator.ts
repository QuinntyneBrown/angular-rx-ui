import { IDispatcher, Store, Service } from "../core";
import { LoginService } from "./login.service";
import { UserLoggedInAction, LoginSuccessAction, LogoutAction } from "./login.actions";

@Service({
    serviceName: "loginActionCreator",
    viewProviders: ["dispatcher", "loginService", "guid"]
})
export class LoginActionCreator {
    constructor(private dispatcher: IDispatcher, private loginService: LoginService, private guid) { }    

    tryToLogin = options => {
        var newId = this.guid();
        this.loginService.tryToLogin({
            data: {
                username: options.username,
                password: options.password
            }
        }).then(results => {
            this.dispatcher.dispatch(new UserLoggedInAction(newId, results));
        });
        return newId;
    }

    loginSuccess = () => this.dispatcher.dispatch(new LoginSuccessAction()); 

    logout = () => this.dispatcher.dispatch(new LogoutAction());
    
}
