import { PagingConfig } from "./paging-config.model";

export class PagingConfigProvider implements angular.IServiceProvider {
    page: number;
    pageSize: number;
    $get = () => new PagingConfig(this.page,this.pageSize);
}


