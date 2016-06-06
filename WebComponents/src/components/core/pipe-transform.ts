export interface PipeTransform {
    transform(value: any, args: Array<string>): any;
}