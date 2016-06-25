"use strict";
var tabs_actions_1 = require("./tabs.actions");
exports.setCurrentTabReducer = function (state, action) {
    if (action instanceof tabs_actions_1.SetCurrentTabAction) {
        state.tabIndex[action.tabName] = action.index;
        state.lastTriggeredByAction = tabs_actions_1.SetCurrentTabAction;
    }
    return state;
};
exports.tabChildLoadedReducer = function (state, action) {
    if (action instanceof tabs_actions_1.TabChildLoadedAction) {
        state.lastTriggeredByAction = tabs_actions_1.TabChildLoadedAction;
    }
    return state;
};
//# sourceMappingURL=tabs.reducers.js.map