export class BaseWrappedException extends Error {
    constructor(message: string) { super(message); }

    get wrapperMessage(): string { return ''; }
    get wrapperStack(): any { return null; }
    get originalException(): any { return null; }
    get originalStack(): any { return null; }
    get context(): any { return null; }
    get message(): string { return ''; }
}