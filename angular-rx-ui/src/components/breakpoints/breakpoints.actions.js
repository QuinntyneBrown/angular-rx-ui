"use strict";
var core_1 = require("../core");
core_1.Action({
    type: "breakpoints.windowResizeAction"
});
var WindowResizeAction = (function () {
    function WindowResizeAction(previousWindowSize, currentWindowSize) {
        this.previousWindowSize = previousWindowSize;
        this.currentWindowSize = currentWindowSize;
    }
    return WindowResizeAction;
}());
exports.WindowResizeAction = WindowResizeAction;
//# sourceMappingURL=breakpoints.actions.js.map