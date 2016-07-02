import { Action } from "../core";

@Action({
    type: "login.rememberMeAction"
})
export class RememberMeAction { constructor(public username: string) { } }

@Action({
    type: "login.logoutAction"
})
export class LogoutAction { constructor() { } }

@Action({
    type: "login.loginSuccessAction"
})
export class LoginSuccessAction { constructor() { } }

@Action({
    type: "login.userLoggedInAction"
})
export class UserLoggedInAction { constructor(public id, public data) { } }

