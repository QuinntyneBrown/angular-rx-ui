"use strict";
var validate_page_properties_and_get_skip_count_1 = require("./validate-page-properties-and-get-skip-count");
var paging_config_model_1 = require("./paging-config.model");
var paged_list_model_1 = require("./paged-list.model");
function toPageListFromInMemory(entities, page, pageSize) {
    if (entities == null)
        throw new Error("entities");
    var pagingConfig = new paging_config_model_1.PagingConfig(page, pageSize);
    var skipCount = validate_page_properties_and_get_skip_count_1.validatePagePropertiesAndGetSkipCount(pagingConfig);
    var data = entities.slice(skipCount, pageSize + skipCount);
    return new paged_list_model_1.PagedList(data, page, pageSize, entities.length);
}
exports.toPageListFromInMemory = toPageListFromInMemory;
//# sourceMappingURL=to-paged-list-from-in-memory.js.map