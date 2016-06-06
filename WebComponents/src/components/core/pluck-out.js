"use strict";
exports.pluckOut = function (options) {
    for (var i = 0; i < options.items.length; i++) {
        if (options.value == options.items[i][options.key || "id"]) {
            options.items.splice(i, 1);
        }
    }
    return options.items;
};
//# sourceMappingURL=pluck-out.js.map