"use strict";
var core_1 = require("../core");
core_1.Action({
    type: "window.resizeAction"
});
var ResizeAction = (function () {
    function ResizeAction(innerWidth) {
        this.innerWidth = innerWidth;
    }
    return ResizeAction;
}());
exports.ResizeAction = ResizeAction;
core_1.Action({
    type: "window.keyDownAction"
});
var KeyDownAction = (function () {
    function KeyDownAction(keyCode) {
        this.keyCode = keyCode;
    }
    return KeyDownAction;
}());
exports.KeyDownAction = KeyDownAction;
//# sourceMappingURL=window.actions.js.map