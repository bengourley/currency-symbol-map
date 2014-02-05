module.exports = mapSymbol

var map = require('./map.json')

function mapSymbol(currencyCode) {
  if (map.hasOwnProperty(currencyCode)) {
    return map[currencyCode]
  } else {
    return '?'
  }
}