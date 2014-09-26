# currency-symbol-map

A dictionary of currency codes mapped to currency symbols, with support for both amd and commonjs

## Installation

    npm install currency-symbol-map

## Usage

```js
var map = require('currency-symbol-map');

map["GBP"] //=> '£'
map["EUR"] //=> '€'
map["USD"] //=> '$'
map["NOT A VALID CODE"] //=> undefined
```

Currency symbols sourced from from [xe](http://www.xe.com/symbols.php).
