"use strict";
var actions = require("./breakpoints.actions");
exports.breakpointsReducer = function (state, action) {
    //TODO: fix
    if (action instanceof actions.WindowResizeAction) {
        if (action.currentWindowSize < 788)
            state.breakpointName = "x-small";
        if (action.currentWindowSize < 788)
            state.breakpointName = "small";
        if (action.currentWindowSize < 788)
            state.breakpointName = "medium";
        if (action.currentWindowSize < 788)
            state.breakpointName = "large";
        if (action.currentWindowSize >= 1240)
            state.breakpointName = "x-large";
    }
    return state;
};
//# sourceMappingURL=breakpoints.reducers.js.map