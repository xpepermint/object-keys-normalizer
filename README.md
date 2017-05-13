![Build Status](https://travis-ci.org/xpepermint/object-keys-normalizer.svg?branch=master)&nbsp;[![NPM Version](https://badge.fury.io/js/object-keys-normalizer.svg)](https://badge.fury.io/js/object-keys-normalizer)&nbsp;[![Dependency Status](https://gemnasium.com/xpepermint/object-keys-normalizer.svg)](https://gemnasium.com/xpepermint/object-keys-normalizer)

# object-keys-normalizer

> Deeply normalizes object keys (included nested objects and objects in arrays) to the format of your choosing.

You can find similar NPM packages on the internet but this module is different because it updates only the keys and leaves the values (e.g. number, buffer) untouched.

This is a light weight open source package for the **server** and **browser** (using module bundler) written with  [TypeScript](https://www.typescriptlang.org). The source code is available on [GitHub](https://github.com/xpepermint/object-keys-normalizer) where you can also find our [issue tracker](https://github.com/xpepermint/object-keys-normalizer/issues).

## Installation

Run the command below to install the package.

```
npm install --save object-keys-normalizer
```

## Example

```js
import { normalizeKeys } from 'object-keys-normalizer';

const data = {
  first_name: "John",
  lastName: "Smith",
};

normalizeKeys(data, "camel"); // => { firstName: "John", lastName: "Smith" }
normalizeKeys(data, "sname"); // => { first_name: "John", last_name: "Smith" }
normalizeKeys(data, "lower"); // => { first_name: "John", lastname: "Smith" }
normalizeKeys(data, "upper"); // => { FIRST_NAME: "John", LASTNAME: "Smith" }
normalizeKeys(data, (k) => k.toLowerCase()); // => { first_name: "John", lastname: "Smith" }
```

## License (MIT)

```
Copyright (c) 2016+ Kristijan Sedlak <xpepermint@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated modelation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
```
