## restring

A slightly nicer `JSON.stringify`.

```js
var restring = require('restring');

> restring(2)
"2 // Number"

> restring(function foo() {})
"[function foo]"
```

(extracted from [mistakes](https://github.com/tmcw/mistakes))
