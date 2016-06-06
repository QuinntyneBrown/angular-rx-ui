export class Response {
    constructor(options: ResponseOptions) {
        this.body = options.body as string;
    }

    body: string;

    json(): any {
        return JSON.parse(this.body);
    }
}

export class ResponseOptions {
    body: string | Object;
}