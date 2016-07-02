import { BaseService, Injectable, Service } from "../core";

@Injectable()
@Service({
    serviceName: "userService",
    viewProviders: ["$q", "apiEndpoint", "fetch"]
})
export class UserService extends BaseService {
    constructor($q: angular.IQService, apiEndpoint, fetch) {
        super($q, apiEndpoint, fetch)
    }

    current = options => {
        var deferred = this.$q.defer();
        this.fetch.fromService({ method: "GET", url: this.baseUri + "/current" }).then(function (results) {
            deferred.resolve(results.data);
        }).catch(function (error) {
            deferred.resolve(error);
        });
        return deferred.promise;
    }

    get baseUri() { return this.apiEndpoint.getBaseUrl() + "/user"; }

}
