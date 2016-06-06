import { Injectable } from "./injectable";
import { Response } from "./static-response";

export interface IHttp {
    get(url: string): Rx.Observable<Response>;
}


@Injectable()
export class Http {
}

angular.module("http", [])
    .service("http", [Http]);