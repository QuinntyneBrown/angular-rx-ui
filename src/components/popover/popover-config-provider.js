"use strict";
var popover_config_1 = require("./popover-config");
var PopoverConfigProvider = (function () {
    function PopoverConfigProvider() {
        var _this = this;
        this.distance = 10;
        this.directionPriorityList = ["right", "bottom", "left", "top"];
        this.transitionDurationInMilliseconds = 300;
        this.$get = function () { return new popover_config_1.PopoverConfig(_this.directionPriorityList, _this.distance, _this.transitionDurationInMilliseconds); };
    }
    return PopoverConfigProvider;
}());
exports.PopoverConfigProvider = PopoverConfigProvider;
//# sourceMappingURL=popover-config-provider.js.map