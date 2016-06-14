"use strict";
var actions = require("./modal.actions");
exports.openModalReducer = function (state, action) {
    if (action instanceof actions.OpenModalAction) {
        state.modalHtml = action.html;
        state.modalOpen = true;
    }
    return state;
};
exports.closeModalReducer = function (state, action) {
    if (action instanceof actions.CloseModalAction) {
        state.modalHtml = '';
        state.modalOpen = false;
    }
    return state;
};
//# sourceMappingURL=modal.reducers.js.map