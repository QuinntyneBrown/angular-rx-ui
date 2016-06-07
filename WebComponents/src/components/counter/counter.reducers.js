"use strict";
var actions = require("./counter.actions");
exports.counterReducer = function (state, action) {
    state.count = state.count || 0;
    if (action instanceof actions.Increment)
        state.count = state.count + 1;
    if (action instanceof actions.Decrement)
        state.count = state.count - 1;
    return state;
};
//# sourceMappingURL=counter.reducers.js.map