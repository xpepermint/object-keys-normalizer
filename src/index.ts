import * as camelCase from "lodash.camelcase";
import * as snakeCase from "lodash.snakecase";

export function normalizeKeys(obj, kind) {
  if (obj && obj.constructor === Object) {
    Object.keys(obj).forEach((key) => {
      let value = obj[key];
      delete obj[key];
      if (kind === "camel") {
        key = camelCase(key);
      } else if (kind === "snake") {
        key = snakeCase(key);
      } else if (kind === "upper") {
        key = key.toUpperCase();
      } else if (kind === "lower") {
        key = key.toLowerCase();
      } else if(typeof kind === "function") {
        key = kind(key);
      }
      obj[key] = normalizeKeys(value, kind);
    });
  } else if (obj && obj.constructor === Array) {
    obj = obj.map((o) => normalizeKeys(o, kind));
  }
  return obj;
}