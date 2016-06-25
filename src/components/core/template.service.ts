import { Service, ITemplate, ITemplateGetOptions, provide } from "../core";

@Service({
    serviceName: "template",
    viewProviders: ["$http","$q","$templateCache"]
})
export class Template implements ITemplate {

    constructor(private $http: ng.IHttpService,
        private $q: ng.IQService,
        private $templateCache: ng.ITemplateCacheService) {}

    public get = (options: ITemplateGetOptions): angular.IPromise<any> => {

        let deferred = this.$q.defer();
        let cacheResult = this.$templateCache.get(options.templateUrl);

        if (cacheResult) {
            if (Array.isArray(cacheResult))
                deferred.resolve(cacheResult[1]);
            deferred.resolve(cacheResult);
            return deferred.promise;
        }

        this.$http.get(options.templateUrl, { cache: this.$templateCache }).then((response) => {
            deferred.resolve(<string>response.data);
        });

        return deferred.promise;
    }

}


var app = angular.module("template", []);

provide(app, Template);

