"use strict";
var ends_with_1 = require("./ends-with");
var cachedData = {};
/**
 * Caches the returned Observable.
 * The cache key used is either a property with the name ${propertyKey} from the first arg to the function.
 * If propertyKey isn't specified or not there, then if the first arg is string, it's used as the key
 * else we stringify the whole object.
 *
 * If there are no args passed to the function, then the function name is the key.
 */
function Cache(propertyKey) {
    return function (target, functionName, descriptor) {
        var originalMethod = descriptor.value;
        descriptor.value = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i - 0] = arguments[_i];
            }
            var key = getCacheKey(functionName, propertyKey, args);
            var cache = cachedData[key];
            if (cache && cache.data) {
                return Rx.Observable.of(cache.data);
            }
            else if (cache && cache.observable) {
                return cache.observable;
            }
            else {
                cache = {
                    observable: originalMethod.apply(this, args)
                        .map(function (r) {
                        delete cache.observable;
                        cache.data = r;
                        return cache.data;
                    }).share()
                };
                cachedData[key] = cache;
                return cache.observable;
            }
        };
        return descriptor;
    };
}
exports.Cache = Cache;
/**
 * This function clears the cache by @Cache based on the same key and functionName logic.
 * This function requires the name of the function that would have generated the cache that needs to be cleared.
 * Also if the function called is 'clearAllCachedData()' then all data is cleared.
 */
function ClearCache(functionName, propertyKey) {
    return function (target, propertyName, descriptor) {
        var originalMethod = descriptor.value;
        descriptor.value = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i - 0] = arguments[_i];
            }
            if (functionName === 'clearAllCachedData') {
                cachedData = {};
            }
            else {
                var key = getCacheKey(functionName, propertyKey, args);
                delete cachedData[key];
            }
            return originalMethod.apply(this, args);
        };
        return descriptor;
    };
}
exports.ClearCache = ClearCache;
function ClearAllFunctionCache(functionInfo) {
    for (var e in cachedData) {
        var normalizedKey = e.toLocaleLowerCase();
        var normalizedFunctionName = functionInfo.name.toLocaleLowerCase();
        if (normalizedKey.indexOf("/" + normalizedFunctionName + "/") !== -1 ||
            ends_with_1.endsWith(normalizedKey, normalizedFunctionName) ||
            normalizedKey.indexOf("/" + normalizedFunctionName + ".") !== -1) {
            delete cachedData[e];
        }
    }
}
exports.ClearAllFunctionCache = ClearAllFunctionCache;
function getCacheKey(functionName, propertyName, args) {
    var key = functionName + "+";
    if (propertyName && args && args.length > 0 && args[0][propertyName]) {
        key += args[0][propertyName];
    }
    else if (args && args.length > 0 && typeof args[0] === 'string') {
        key += args[0];
    }
    else if (args && args.length > 1) {
        key += JSON.stringify(args);
    }
    return key;
}
//# sourceMappingURL=cache.decorator.js.map