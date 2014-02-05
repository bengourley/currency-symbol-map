# currency-symbol-map

A function to lookup the currency symbol for a given currency code

## Installation

    npm install currency-symbol-map

## Usage

```js
var getSymbol = require('currency-symbol-map')
getSymbol('GBP') //=> '£'
getSymbol('EUR') //=> '€'
getSymbol('USD') //=> '$'
getSymbol('NOT A VALID CODE') //=> '?'
```

Currency symbols sourced from from [xe](http://www.xe.com/symbols.php).