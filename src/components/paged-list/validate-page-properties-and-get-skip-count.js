"use strict";
function validatePagePropertiesAndGetSkipCount(pagingConfig) {
    if (pagingConfig.page < 1) {
        pagingConfig.page = 1;
    }
    if (pagingConfig.pageSize < 1) {
        pagingConfig.pageSize = 1;
    }
    if (pagingConfig.pageSize > 100) {
        pagingConfig.pageSize = 100;
    }
    return pagingConfig.pageSize * (pagingConfig.page - 1);
}
exports.validatePagePropertiesAndGetSkipCount = validatePagePropertiesAndGetSkipCount;
//# sourceMappingURL=validate-page-properties-and-get-skip-count.js.map