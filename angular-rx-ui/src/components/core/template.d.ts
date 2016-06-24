import { ITemplateGetOptions } from "./template-get-options.d";

export interface ITemplate {
    get(options: ITemplateGetOptions): ng.IPromise<string>;
}