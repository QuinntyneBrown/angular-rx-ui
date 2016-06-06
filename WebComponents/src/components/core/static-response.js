"use strict";
var Response = (function () {
    function Response(options) {
        this.body = options.body;
    }
    Response.prototype.json = function () {
        return JSON.parse(this.body);
    };
    return Response;
}());
exports.Response = Response;
var ResponseOptions = (function () {
    function ResponseOptions() {
    }
    return ResponseOptions;
}());
exports.ResponseOptions = ResponseOptions;
//# sourceMappingURL=static-response.js.map