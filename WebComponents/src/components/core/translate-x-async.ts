var $q: ng.IQService = <ng.IQService>angular.injector(['ng']).get("$q");

export interface ITranslateXAsyncOptions {
    x: number;
    element: HTMLElement;
}

export var translateXAsync = (options: ITranslateXAsyncOptions) => {

    var deferred = $q.defer();

    angular.element(options.element).css({
        "-moz-transform": "translateX(" + options.x + "px)",
        "-webkit-transform": "translateX(" + options.x + "px)",
        "-ms-transform": "translateX(" + options.x + "px)",
        "-transform": "translateX(" + options.x + "px)"
    });

    options.element.addEventListener('transitionend', resolve, false);

    function resolve() {
        options.element.removeEventListener('transitionend', resolve);
        deferred.resolve();
    }

    return deferred.promise;

};

angular.module("translateXAsync",[]).value("translateXAsync", translateXAsync);