# currency-symbol-map

A function to lookup the currency symbol for a given currency code.

## Installation

    npm install currency-symbol-map

## Usage

### Get symbol from currency code
```js
// ES5
const getSymbolFromCurrency = require('currency-symbol-map')

// ES6
import getSymbolFromCurrency from 'currency-symbol-map'

getSymbolFromCurrency('GBP') //=> '£'
getSymbolFromCurrency('EUR') //=> '€'
getSymbolFromCurrency('USD') //=> '$'
getSymbolFromCurrency('NOT A VALID CODE') //=> undefined
```

### Exposed map for other processing
```js
// ES5
const currencyToSymbolMap = require('currency-symbol-map/map')

// ES6
import currencyToSymbolMap from 'currency-symbol-map/map'

console.log(currencyToSymbolMap)
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

### 5.1.0
- Add CNH Currency mapping: [#82](https://github.com/bengourley/currency-symbol-map/pull/82)

### 5.0.1
- upgraded linter and improved code formatting ([#63](https://github.com/bengourley/currency-symbol-map/pull/63))

### 5.0.0
- added some missing currencies ([#61](https://github.com/bengourley/currency-symbol-map/pull/61))
- fixed the BTC symbol ([#50](https://github.com/bengourley/currency-symbol-map/pull/50))
- fixed the KZT symbol ([#52](https://github.com/bengourley/currency-symbol-map/pull/52))
- fixed the SGD symbol ([#55](https://github.com/bengourley/currency-symbol-map/pull/55))
- added TypeScript typings ([#53](https://github.com/bengourley/currency-symbol-map/pull/53))
- upgraded test libraries & added extra test cases ([#62](https://github.com/bengourley/currency-symbol-map/pull/62))

### 4.0.0
- the reverse lookup feature was removed (retrieving currency given a symbol) because
there is not a deterministic way to do so (i.e. the same symbol is used by multiple currencies).
- in previous versions, an unsuccessful lookup would return the `'?'` character. It now returns
`undefined` so that it is up to you how to handle the failure.

## Credits

Currency symbols originally sourced from [xe](http://www.xe.com/symbols.php), but maintained
and updated by [contributors](https://github.com/bengourley/currency-symbol-map/pulls?q=is%3Apr+is%3Aclosed).
