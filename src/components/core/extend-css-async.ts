let $q: ng.IQService = <ng.IQService>angular.injector(['ng']).get("$q");

export var extendCssAsync = (options: any) => {
    return $q.when(angular.extend(options.nativeHTMLElement.style, options.cssObject));
}

angular.module("extendCssAsync",[]).value("extendCssAsync", extendCssAsync);