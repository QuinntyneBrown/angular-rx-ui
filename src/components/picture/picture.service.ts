import { BaseService, Injectable, Service } from "../core";

@Injectable()
@Service({
	serviceName: "pictureService",
	viewProviders: ["$q","apiEndpoint","fetch"]
})
export class PictureService {
    constructor(private $q: angular.IQService, private apiEndpoint, private fetch) { }

    tryToUpload = options => {
        let deferred = this.$q.defer();
        let xhr = new XMLHttpRequest();
        xhr.open("POST", this.baseUri + "/upload", true);
        xhr.onload = (e) => {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    deferred.resolve(JSON.parse(xhr.response));
                }
                else {
                    deferred.resolve(xhr.statusText);
                }
            }
        };
        xhr.send(options.data);
        return deferred.promise;
    }

    get baseUri() { return this.apiEndpoint.getBaseUrl() + "/picture"; }

}
