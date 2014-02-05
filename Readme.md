# currency-symbol-map

Nest crud-services within [crud-services](http://npm.im/crud-service). Useful if you have any sort of rich
nested item within your service entities that you want to store within the same object, eg:

- delivery addresses for a customer
- downloads on an article
- available sizes of an item of clothing

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

Currency symbols sourced from from ee [xe](http://www.xe.com/symbols.php).