## restring

[![](http://ci.testling.com/tmcw/restring.png)](http://ci.testling.com/tmcw/restring)

A slightly nicer `JSON.stringify`.

### example

```js
var restring = require('restring');

> restring(2)
"2 // Number"

> restring(function foo() {})
"[function foo]"

> restring({})
"{} // Object"

> restring(new Date('03/03/2003 GMT'))
'"2003-03-03T00:00:00.000Z" // Date'

> restring.decimals(10)(1/3)
'0.3333333333 // Number'
```

### methods

```
var restring = require('restring');
```

#### restring.decimals()

Set the maximum number of decimals displayed for floating point numbers.

### install

With npm do:

    npm install restring

Otherwise use `restring.js`.

### license

BSD

(extracted from [mistakes](https://github.com/tmcw/mistakes))
