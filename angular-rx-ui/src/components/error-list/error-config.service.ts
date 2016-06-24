import { Store, Service } from "../core";

@Service({
    serviceName: "errorConfig",
})
export class ErrorConfig {
    hrefText: string;
    href: string;
    message: string;
}