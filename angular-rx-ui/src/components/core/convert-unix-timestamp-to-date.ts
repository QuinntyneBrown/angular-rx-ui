export var convertUnixTimestampToDate = (timestamp: number): Date => new Date(timestamp * 1000);

angular.module("convertUnixTimestampToDate", []).value("convertUnixTimestampToDate", convertUnixTimestampToDate);