export interface IApiEndpoint {
    getBaseUrl(name?: string): string;
}

export class ApiEndpointProvider {
    config: any = {
        getBaseUrl: (name?: string) => {
            var baseUrl = "";

            if (name) {
                this.config.baseUrls.forEach((endpointDefinition: any) => {
                    if (name === endpointDefinition.name) {
                        baseUrl = endpointDefinition.url;
                    }
                });
            }

            if (!name || baseUrl === "") {
                this.config.baseUrls.forEach((endpointDefinition: any) => {
                    if (!endpointDefinition.name && baseUrl === "") {
                        baseUrl = endpointDefinition.url;
                    }
                });
            }
            return baseUrl;
        },
        baseUrls: [],
        configure: function (baseUrl: string, name?: string) {
            var self = this;
            self.baseUrls.push({ url: baseUrl, name: name });
        }
    };

    configure(baseUrl: string, name?: string): void {
        this.config.baseUrls.push({ url: baseUrl, name: name });
    }

    $get(): IApiEndpoint {
        return this.config;
    }
}

angular.module("apiEndpoint", []).provider("apiEndpoint", ApiEndpointProvider);