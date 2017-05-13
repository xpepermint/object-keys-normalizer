import test from "ava";
import * as cloneDeep from "lodash.clonedeep";
import { normalizeKeys } from "../src";

const data = {
  first_name: "foo",
  lastName: "bar",
  friends: [
    { 
      first_name: "foo",
      lastName: "bar",
    }
  ],
  friend: { 
    first_name: "foo",
    lastName: "bar",
  }
};

test("renames object keys to camel case", (t) => {
  const obj = cloneDeep(data);
  t.deepEqual(normalizeKeys(obj, "camel"), {
    firstName: "foo",
    lastName: "bar",
    friends: [
      { 
        firstName: "foo",
        lastName: "bar",
      }
    ],
    friend: { 
      firstName: "foo",
      lastName: "bar",
    }
  });
});

test("renames object keys to snake case", (t) => {
  const obj = cloneDeep(data);
  t.deepEqual(normalizeKeys(obj, "snake"), {
    first_name: "foo",
    last_name: "bar",
    friends: [
      { 
        first_name: "foo",
        last_name: "bar",
      }
    ],
    friend: { 
      first_name: "foo",
      last_name: "bar",
    }
  });
});

test("renames object keys to upper case", (t) => {
  const obj = cloneDeep(data);
  t.deepEqual(normalizeKeys(obj, "upper"), {
    FIRST_NAME: "foo",
    LASTNAME: "bar",
    FRIENDS: [
      { 
        FIRST_NAME: "foo",
        LASTNAME: "bar",
      }
    ],
    FRIEND: { 
      FIRST_NAME: "foo",
      LASTNAME: "bar",
    }
  });
});

test("renames object keys to lower case", (t) => {
  const obj = cloneDeep(data);
  t.deepEqual(normalizeKeys(obj, "lower"), {
    first_name: "foo",
    lastname: "bar",
    friends: [
      { 
        first_name: "foo",
        lastname: "bar",
      }
    ],
    friend: { 
      first_name: "foo",
      lastname: "bar",
    }
  });
});

test("renames object keys by using a custom function", (t) => {
  const obj = cloneDeep(data);
  t.deepEqual(normalizeKeys(obj, (k) => `_${k}`), {
    _first_name: "foo",
    _lastName: "bar",
    _friends: [
      { 
        _first_name: "foo",
        _lastName: "bar",
      }
    ],
    _friend: { 
      _first_name: "foo",
      _lastName: "bar",
    }
  });
});
