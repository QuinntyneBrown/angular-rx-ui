"use strict";
exports.getActionType = function (fn) {
    return fn.__proto__.constructor.actionName;
};
//# sourceMappingURL=get-action-type.js.map