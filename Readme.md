# currency-symbol-map

A function to lookup the currency symbol for a given currency code.

## Installation

    npm install currency-symbol-map

## Usage

### Get symbol from currency code
```js
const getSymbolFromCurrency = require('currency-symbol-map')
getSymbolFromCurrency('GBP') //=> '£'
getSymbolFromCurrency('EUR') //=> '€'
getSymbolFromCurrency('USD') //=> '$'
getSymbolFromCurrency('NOT A VALID CODE') //=> undefined
```

### Exposed map for other processing
```js
const currencySymbolMap = require('currency-symbol-map/map')
// =>
{
 "USD": "$",
 "GBP": "£",
 …
}
```

## Tests
```bash
npm test
```

## Changelog

### 4.0.0
- the reverse lookup feature was removed (retrieving currency given a symbol) because
there is not a deterministic way to do so (i.e. the same symbol is used by multiple currencies).
- in previous versions, an unsuccessful lookup would return the `'?'` character. It now returns
`undefined` so that it is up to you how to handle the failure.

## Credits

Currency symbols originally sourced from [xe](http://www.xe.com/symbols.php), but maintained
and updated by [contributors](https://github.com/bengourley/currency-symbol-map/pulls?q=is%3Apr+is%3Aclosed).
