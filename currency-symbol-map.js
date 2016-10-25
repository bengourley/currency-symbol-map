var currencySymbolMap = require('./map');

var symbolCurrencyMap = {};
Object.keys(currencySymbolMap).forEach(function (key) {
  symbolCurrencyMap[currencySymbolMap[key]] = key
})

function getSymbolFromCurrency(currencyCode) {
  if (typeof currencyCode !== 'string') return undefined
  var code = currencyCode.toUpperCase();
  if (!currencySymbolMap.hasOwnProperty(code)) return undefined
  return currencySymbolMap[code];
}

function getCurrencyFromSymbol(symbol) {
  if (!symbolCurrencyMap.hasOwnProperty(symbol)) return undefined
  return symbolCurrencyMap[symbol]
}

function getSymbol(currencyCode) {
  if (typeof currencyCode !== 'string') return '?'
  var symbol = getSymbolFromCurrency(currencyCode.toUpperCase())
  return symbol !== undefined ? symbol : '?'
}

module.exports = getSymbol
module.exports.getSymbolFromCurrency = getSymbolFromCurrency
module.exports.getCurrencyFromSymbol = getCurrencyFromSymbol
module.exports.symbolCurrencyMap = symbolCurrencyMap
module.exports.currencySymbolMap = currencySymbolMap
