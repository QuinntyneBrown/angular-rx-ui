"use strict";
var paging_config_model_1 = require("./paging-config.model");
var PagingConfigProvider = (function () {
    function PagingConfigProvider() {
        var _this = this;
        this.$get = function () { return new paging_config_model_1.PagingConfig(_this.page, _this.pageSize); };
    }
    return PagingConfigProvider;
}());
exports.PagingConfigProvider = PagingConfigProvider;
//# sourceMappingURL=paging-config-provider.js.map