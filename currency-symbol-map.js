var currencySymbolMap = require('./map');

function getSymbolFromCurrency(currencyCode) {
  if (typeof currencyCode !== 'string') return undefined;
  var code = currencyCode.toUpperCase();
  if (!currencySymbolMap.hasOwnProperty(code)) return undefined;
  return currencySymbolMap[code];
}

function safeGetSymbolFromCurrency(currencyCode) {
  const symbol = getSymbolFromCurrency(currencyCode);
  return symbol == null ? currencyCode : symbol;
}

module.exports.getSymbolFromCurrency = getSymbolFromCurrency;
module.exports.safeGetSymbolFromCurrency = safeGetSymbolFromCurrency;
