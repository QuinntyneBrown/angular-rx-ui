"use strict";
var actions = require("./user.actions");
var core_1 = require("../core");
exports.removeUserReducer = function (state, action) {
    if (action instanceof actions.RemoveUserAction)
        core_1.pluckOut({ items: state.users, value: action.entity.id });
    return state;
};
exports.addUserReducer = function (state, action) {
    if (action instanceof actions.AddOrUpdateUserAction) {
        core_1.addOrUpdate({ items: state.users, item: action.entity });
    }
    return state;
};
exports.allUsersReducer = function (state, action) {
    if (action instanceof actions.AllUsersAction) {
        state.users = action.entities;
    }
    return state;
};
exports.setCurrentUserReducer = function (state, action) {
    if (action instanceof actions.SetCurrentUserAction) {
        state.currentUserId = action.id;
    }
    return state;
};
exports.currentUserReducer = function (state, action) {
    if (action instanceof actions.CurrentUserAction) {
        state.currentUser = action.entity;
    }
    return state;
};
//# sourceMappingURL=user.reducers.js.map