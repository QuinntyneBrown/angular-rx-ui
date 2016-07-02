// https://github.com/angular/angular/blob/ae75e3640a2d9eb1e897a0771d92b976c5a42c75/modules/%40angular/facade/src/exception_handler.ts
"use strict";
var base_wrapped_exception_1 = require("./base-wrapped-exception");
var _ArrayLogger = (function () {
    function _ArrayLogger() {
        this.res = [];
    }
    _ArrayLogger.prototype.log = function (s) { this.res.push(s); };
    _ArrayLogger.prototype.logError = function (s) { this.res.push(s); };
    _ArrayLogger.prototype.logGroup = function (s) { this.res.push(s); };
    _ArrayLogger.prototype.logGroupEnd = function () { };
    ;
    return _ArrayLogger;
}());
var ExceptionHandler = (function () {
    function ExceptionHandler(_logger, _rethrowException) {
        if (_rethrowException === void 0) { _rethrowException = true; }
        this._logger = _logger;
        this._rethrowException = _rethrowException;
    }
    ExceptionHandler.exceptionToString = function (exception, stackTrace, reason) {
        if (stackTrace === void 0) { stackTrace = null; }
        if (reason === void 0) { reason = null; }
        var l = new _ArrayLogger();
        var e = new ExceptionHandler(l, false);
        e.call(exception, stackTrace, reason);
        return l.res.join('\n');
    };
    ExceptionHandler.prototype.call = function (exception, stackTrace, reason) {
        if (stackTrace === void 0) { stackTrace = null; }
        if (reason === void 0) { reason = null; }
        var originalException = this._findOriginalException(exception);
        var originalStack = this._findOriginalStack(exception);
        var context = this._findContext(exception);
        this._logger.logGroup("EXCEPTION: " + this._extractMessage(exception));
        if (stackTrace && !originalStack) {
            this._logger.logError('STACKTRACE:');
            this._logger.logError(this._longStackTrace(stackTrace));
        }
        if (reason) {
            this._logger.logError("REASON: " + reason);
        }
        if (originalException) {
            this._logger.logError("ORIGINAL EXCEPTION: " + this._extractMessage(originalException));
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
        if (this._rethrowException)
            throw exception;
    };
    /** @internal */
    ExceptionHandler.prototype._extractMessage = function (exception) {
        //return exception instanceof BaseWrappedException ? exception.wrapperMessage :
        //    exception.toString();
        return "Not Implemented";
    };
    /** @internal */
    ExceptionHandler.prototype._longStackTrace = function (stackTrace) {
        //return isListLikeIterable(stackTrace) ? (<any[]>stackTrace).join('\n\n-----async gap-----\n') :
        //    stackTrace.toString();
    };
    /** @internal */
    ExceptionHandler.prototype._findContext = function (exception) {
        //try {
        //    if (!(exception instanceof BaseWrappedException)) return null;
        //    return isPresent(exception.context) ? exception.context :
        //        this._findContext(exception.originalException);
        //} catch (e) {
        //    // exception.context can throw an exception. if it happens, we ignore the context.
        //    return null;
        //}
    };
    /** @internal */
    ExceptionHandler.prototype._findOriginalException = function (exception) {
        //if (!(exception instanceof BaseWrappedException)) return null;
        //var e = exception.originalException;
        //while (e instanceof BaseWrappedException && isPresent(e.originalException)) {
        //    e = e.originalException;
        //}
        //return e;
    };
    /** @internal */
    ExceptionHandler.prototype._findOriginalStack = function (exception) {
        if (!(exception instanceof base_wrapped_exception_1.BaseWrappedException))
            return null;
        var e = exception;
        var stack = exception.originalStack;
        while (e instanceof base_wrapped_exception_1.BaseWrappedException && e.originalException) {
            e = e.originalException;
            if (e instanceof base_wrapped_exception_1.BaseWrappedException && e.originalException) {
                stack = e.originalStack;
            }
        }
        return stack;
    };
    return ExceptionHandler;
}());
exports.ExceptionHandler = ExceptionHandler;
//# sourceMappingURL=exception-handler.js.map