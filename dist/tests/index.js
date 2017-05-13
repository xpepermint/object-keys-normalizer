"use strict";
exports.__esModule = true;
var ava_1 = require("ava");
var cloneDeep = require("lodash.clonedeep");
var src_1 = require("../src");
var data = {
    first_name: "foo",
    lastName: "bar",
    friends: [
        {
            first_name: "foo",
            lastName: "bar"
        }
    ],
    friend: {
        first_name: "foo",
        lastName: "bar"
    }
};
ava_1["default"]("renames object keys to camel case", function (t) {
    var obj = cloneDeep(data);
    t.deepEqual(src_1.normalizeKeys(obj, "camel"), {
        firstName: "foo",
        lastName: "bar",
        friends: [
            {
                firstName: "foo",
                lastName: "bar"
            }
        ],
        friend: {
            firstName: "foo",
            lastName: "bar"
        }
    });
});
ava_1["default"]("renames object keys to snake case", function (t) {
    var obj = cloneDeep(data);
    t.deepEqual(src_1.normalizeKeys(obj, "snake"), {
        first_name: "foo",
        last_name: "bar",
        friends: [
            {
                first_name: "foo",
                last_name: "bar"
            }
        ],
        friend: {
            first_name: "foo",
            last_name: "bar"
        }
    });
});
ava_1["default"]("renames object keys to upper case", function (t) {
    var obj = cloneDeep(data);
    t.deepEqual(src_1.normalizeKeys(obj, "upper"), {
        FIRST_NAME: "foo",
        LASTNAME: "bar",
        FRIENDS: [
            {
                FIRST_NAME: "foo",
                LASTNAME: "bar"
            }
        ],
        FRIEND: {
            FIRST_NAME: "foo",
            LASTNAME: "bar"
        }
    });
});
ava_1["default"]("renames object keys to lower case", function (t) {
    var obj = cloneDeep(data);
    t.deepEqual(src_1.normalizeKeys(obj, "lower"), {
        first_name: "foo",
        lastname: "bar",
        friends: [
            {
                first_name: "foo",
                lastname: "bar"
            }
        ],
        friend: {
            first_name: "foo",
            lastname: "bar"
        }
    });
});
ava_1["default"]("renames object keys by using a custom function", function (t) {
    var obj = cloneDeep(data);
    t.deepEqual(src_1.normalizeKeys(obj, function (k) { return "_" + k; }), {
        _first_name: "foo",
        _lastName: "bar",
        _friends: [
            {
                _first_name: "foo",
                _lastName: "bar"
            }
        ],
        _friend: {
            _first_name: "foo",
            _lastName: "bar"
        }
    });
});
//# sourceMappingURL=index.js.map