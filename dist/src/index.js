"use strict";
exports.__esModule = true;
var camelCase = require("lodash.camelcase");
var snakeCase = require("lodash.snakecase");
function normalizeKeys(obj, kind) {
    if (obj && obj.constructor === Object) {
        Object.keys(obj).forEach(function (key) {
            var value = obj[key];
            delete obj[key];
            if (kind === "camel") {
                key = camelCase(key);
            }
            else if (kind === "snake") {
                key = snakeCase(key);
            }
            else if (kind === "upper") {
                key = key.toUpperCase();
            }
            else if (kind === "lower") {
                key = key.toLowerCase();
            }
            else if (typeof kind === "function") {
                key = kind(key);
            }
            obj[key] = normalizeKeys(value, kind);
        });
    }
    else if (obj && obj.constructor === Array) {
        obj = obj.map(function (o) { return normalizeKeys(o, kind); });
    }
    return obj;
}
exports.normalizeKeys = normalizeKeys;
//# sourceMappingURL=index.js.map