"use strict";
var actions = require("./login.actions");
exports.loggedInReducer = function (state, action) {
    if (action instanceof actions.UserLoggedInAction) {
        state.token = action.data.access_token;
    }
    return state;
};
exports.logoutReducer = function (state, action) {
    if (action instanceof actions.LogoutAction) {
        state.token = null;
        state.currentUser = null;
    }
    return state;
};
exports.rememberMeReducer = function (state, action) {
    if (action instanceof actions.RememberMeAction)
        state.rememberMe = action.username;
    return state;
};
//# sourceMappingURL=login.reducers.js.map