import { ErrorConfig } from "./error-config.service";

export class ErrorConfigProvider implements angular.IServiceProvider {
    hrefText: string;
    href: string;
    message: string;
    $get = () => new ErrorConfig(this.hrefText,this.href,this.message);
}