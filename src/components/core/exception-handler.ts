// https://github.com/angular/angular/blob/ae75e3640a2d9eb1e897a0771d92b976c5a42c75/modules/%40angular/facade/src/exception_handler.ts

import { BaseWrappedException } from "./base-wrapped-exception";

class _ArrayLogger {
    res: any[] = [];
    log(s: any): void { this.res.push(s); }
    logError(s: any): void { this.res.push(s); }
    logGroup(s: any): void { this.res.push(s); }
    logGroupEnd() { };
}

export class ExceptionHandler {
    constructor(private _logger: any, private _rethrowException: boolean = true) { }

    static exceptionToString(exception: any, stackTrace: any = null, reason: string = null): string {
        var l = new _ArrayLogger();
        var e = new ExceptionHandler(l, false);
        e.call(exception, stackTrace, reason);
        return l.res.join('\n');
    }

    call(exception: any, stackTrace: any = null, reason: string = null): void {
        var originalException = this._findOriginalException(exception);
        var originalStack = this._findOriginalStack(exception);
        var context = this._findContext(exception);

        this._logger.logGroup(`EXCEPTION: ${this._extractMessage(exception)}`);

        if (stackTrace && !originalStack) {
            this._logger.logError('STACKTRACE:');
            this._logger.logError(this._longStackTrace(stackTrace));
        }

        if (reason) {
            this._logger.logError(`REASON: ${reason}`);
        }

        if (originalException) {
            this._logger.logError(`ORIGINAL EXCEPTION: ${this._extractMessage(originalException)}`);
        }

        if (originalStack) {
            this._logger.logError('ORIGINAL STACKTRACE:');
            this._logger.logError(this._longStackTrace(originalStack));
        }

        if (context) {
            this._logger.logError('ERROR CONTEXT:');
            this._logger.logError(context);
        }

        this._logger.logGroupEnd();

        // We rethrow exceptions, so operations like 'bootstrap' will result in an error
        // when an exception happens. If we do not rethrow, bootstrap will always succeed.
        if (this._rethrowException) throw exception;
    }


    /** @internal */
    _extractMessage(exception: any): string {
        //return exception instanceof BaseWrappedException ? exception.wrapperMessage :
        //    exception.toString();
        return "Not Implemented";
    }

    /** @internal */
    _longStackTrace(stackTrace: any): any {
        //return isListLikeIterable(stackTrace) ? (<any[]>stackTrace).join('\n\n-----async gap-----\n') :
        //    stackTrace.toString();
    }

    /** @internal */
    _findContext(exception: any): any {
        //try {
        //    if (!(exception instanceof BaseWrappedException)) return null;
        //    return isPresent(exception.context) ? exception.context :
        //        this._findContext(exception.originalException);
        //} catch (e) {
        //    // exception.context can throw an exception. if it happens, we ignore the context.
        //    return null;
        //}
    }

    /** @internal */
    _findOriginalException(exception: any): any {
        //if (!(exception instanceof BaseWrappedException)) return null;

        //var e = exception.originalException;
        //while (e instanceof BaseWrappedException && isPresent(e.originalException)) {
        //    e = e.originalException;
        //}

        //return e;
    }

    /** @internal */
    _findOriginalStack(exception: any): any {
        if (!(exception instanceof BaseWrappedException)) return null;

        var e = exception;
        var stack = exception.originalStack;
        while (e instanceof BaseWrappedException && e.originalException) {
            e = e.originalException;
            if (e instanceof BaseWrappedException && e.originalException) {
                stack = e.originalStack;
            }
        }

        return stack;
    }

}