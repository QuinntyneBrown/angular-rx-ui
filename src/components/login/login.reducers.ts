import * as actions from "./login.actions";
import { addOrUpdate, pluckOut } from "../core";

export const loggedInReducer = (state, action) => {
    if (action instanceof actions.UserLoggedInAction) {
        state.token = action.data.access_token;
    }
    return state;
}

export const logoutReducer = (state, action) => {
    if (action instanceof actions.LogoutAction) {
        state.token = null;
        state.currentUser = null;
    }
    return state;
}

export const rememberMeReducer = (state, action) => {
    if (action instanceof actions.RememberMeAction)
        state.rememberMe = action.username;

    return state;
}