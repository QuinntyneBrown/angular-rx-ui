export function isPresent(obj: any): boolean {
    return obj !== undefined && obj !== null;
}

angular.module("isPresent", []).value("isPresent", isPresent);