"use strict";
function Action(config) {
    if (config === void 0) { config = {}; }
    return function (cls) {
        cls.type = config.type;
    };
}
exports.Action = Action;
//# sourceMappingURL=action-decorator.js.map