let $q: ng.IQService = <ng.IQService>angular.injector(['ng']).get("$q");

/**
 * @description Append To Body Asynchrously
 * @param options
 */
export const appendToBodyAsync = (options: any) => {
    let deferred = $q.defer();
    document.body.appendChild(options.nativeElement);
    setTimeout(() => { deferred.resolve(); }, options.wait || 100);
    return deferred.promise;
}

angular.module("appendToBodyAsync", []).value("appendToBodyAsync", appendToBodyAsync);
