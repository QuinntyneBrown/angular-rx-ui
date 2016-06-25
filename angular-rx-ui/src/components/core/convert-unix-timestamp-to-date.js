"use strict";
exports.convertUnixTimestampToDate = function (timestamp) { return new Date(timestamp * 1000); };
angular.module("convertUnixTimestampToDate", []).value("convertUnixTimestampToDate", exports.convertUnixTimestampToDate);
//# sourceMappingURL=convert-unix-timestamp-to-date.js.map