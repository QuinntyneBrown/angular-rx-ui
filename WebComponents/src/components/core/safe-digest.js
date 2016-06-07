angular.module("safeDigest", []).value("safeDigest", function (scope) {
    if (!scope.$$phase && (scope.$root && !scope.$root.$$phase))
        scope.$digest();
});
//# sourceMappingURL=safe-digest.js.map