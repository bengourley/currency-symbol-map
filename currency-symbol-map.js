var currencySymbolMap = require('./map')
var currencySymbolUTFMap = require('./utfmap')

module.exports = function getSymbolFromCurrency (currencyCode) {
  if (typeof currencyCode !== 'string') return undefined
  var code = currencyCode.toUpperCase()
  if (!currencySymbolMap.hasOwnProperty(code)) return undefined
  return currencySymbolMap[code]
}

module.exports = function getUTFSymbolFromCurrency (currencyCode) {
  if (typeof currencyCode !== 'string') return undefined
  var code = currencyCode.toUpperCase()
  if (!currencySymbolUTFMap.hasOwnProperty(code)) return undefined
  return currencySymbolUTFMap[code]
}

module.exports.currencySymbolMap = currencySymbolMap
module.exports.currencySymbolUTFMap = currencySymbolUTFMap 
