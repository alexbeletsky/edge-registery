# Access Windows registery from Node.js applications

[Edge](https://github.com/tjanczuk/edge) based implementation of registery access module for node.js applications.

## Example of usage

Install npm package,

```
npm install edge-registery
```

Read and write registery values,

```js
var registery = require('edge-registery');

registery.write({keyName: 'HKEY_CURRENT_USER\\Environment', valueName: 'MyCustomValue', value: 1050 }, function (err) {
    if (err) {
        throw new Error(err);
    }

    registery.read({keyName: 'HKEY_CURRENT_USER\\Environment', valueName: 'MyCustomValue'}, function (err, value) {
        if (err) {
            throw new Error(err);
        }

        console.log(value);
    });
});
```

# Licence (MIT License)

Copyright (c) 2013 Alexander Beletsky

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
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