"use strict";
var window_actions_1 = require("./window.actions");
var core_1 = require("../core");
exports.breakpointsReducer = function (state, action) {
    if (action instanceof window_actions_1.ResizeAction) {
        if (core_1.isBetween(action.innerWidth, 0, 768))
            state.breakpointName = "x-small";
        if (core_1.isBetween(action.innerWidth, 769, 992))
            state.breakpointName = "small";
        if (core_1.isBetween(action.innerWidth, 0, 768))
            state.breakpointName = "medium";
        if (core_1.isBetween(action.innerWidth, 0, 768))
            state.breakpointName = "large";
        if (core_1.isBetween(action.innerWidth, 0))
            state.breakpointName = "x-large";
    }
    return state;
};
//# sourceMappingURL=window.reducers.js.map