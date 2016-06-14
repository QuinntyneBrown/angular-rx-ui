"use strict";
var PagedList = (function () {
    function PagedList(_data, _page, _pageSize, _totalCount) {
        this._data = _data;
        this._page = _page;
        this._pageSize = _pageSize;
        this._totalCount = _totalCount;
    }
    Object.defineProperty(PagedList.prototype, "data", {
        get: function () { return this._data; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PagedList.prototype, "page", {
        get: function () { return this._page; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PagedList.prototype, "pageSize", {
        get: function () { return this._pageSize; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PagedList.prototype, "totalCount", {
        get: function () { return this._totalCount; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PagedList.prototype, "totalPages", {
        get: function () { return Math.ceil(this._totalCount / this._pageSize); },
        enumerable: true,
        configurable: true
    });
    return PagedList;
}());
exports.PagedList = PagedList;
//# sourceMappingURL=paged-list.model.js.map