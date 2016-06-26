export interface IOpenModalOptions {
    html: string;
}

export interface IModalActionCreator {
    open(options: IOpenModalOptions):void;
    close(): void;
}