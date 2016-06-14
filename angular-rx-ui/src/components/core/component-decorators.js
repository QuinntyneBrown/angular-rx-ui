"use strict";
function Component(config) {
    if (config === void 0) { config = {}; }
    return function (cls) {
        config.component = cls;
        cls.config = config;
    };
}
exports.Component = Component;
function CanActivate(fnDefinition) {
    return function (cls) {
        cls.prototype.canActivate = function () {
            return fnDefinition;
        };
    };
}
exports.CanActivate = CanActivate;
//# sourceMappingURL=component-decorators.js.map