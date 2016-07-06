import { BaseService, Injectable, Service } from "../core";

@Injectable()
@Service({
    serviceName: "articleService",
    viewProviders: ["$q", "apiEndpoint", "fetch"]
})
export class ArticleService extends BaseService {
    constructor($q: angular.IQService, apiEndpoint, fetch) {
        super($q, apiEndpoint, fetch)
    }

    get baseUri() { return this.apiEndpoint.getBaseUrl() + "/article"; }

}
