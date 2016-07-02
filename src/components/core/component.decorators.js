"use strict";
exports.Component = function (config) {
    if (config === void 0) { config = {}; }
    return function (cls) {
        config.component = cls;
        cls.config = config;
    };
};
exports.CanActivate = function (fnDefinition) {
    return function (cls) { cls.prototype.canActivate = function () { return fnDefinition; }; };
};
//# sourceMappingURL=component.decorators.js.map