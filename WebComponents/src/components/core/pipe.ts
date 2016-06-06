import { PipeTransform } from "./pipe-transform";

export interface IPipeConfigurationOptions {
    name?: any;
}

export function Pipe(config: IPipeConfigurationOptions = {}) {
    return function (cls: any) {

    };
}