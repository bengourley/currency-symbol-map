const test = require('tape')

const getSymbolFromCurrency = require('./')
const currencySymbolMap = require('./map')

test('getSymbolFromCurrency(): valid params', t => {
  t.equal('$', getSymbolFromCurrency('USD'), 'should return $ when USD is provided')
  t.equal('£', getSymbolFromCurrency('GBP'), 'should return £ when GBP is provided')
  t.equal('€', getSymbolFromCurrency('EUR'), 'should return € when EUR is provided')
  t.equal('€', getSymbolFromCurrency('eur'), 'should return € when eur is provided')
  t.equal(undefined, getSymbolFromCurrency('NON-EXISTENT-CODE'), 'should return undefined when code is non-existent')
  t.end()
})

test('getSymbolFromCurrency(): invalid params', t => {
  t.equal(undefined, getSymbolFromCurrency(1), 'should return undefined when param is not a string')
  t.equal(undefined, getSymbolFromCurrency(null), 'should return undefined when param is null')
  t.equal(undefined, getSymbolFromCurrency(false), 'should return undefined when param is false')
  t.equal(undefined, getSymbolFromCurrency(), 'should return undefined when param is undefined')
  t.end()
})

test('currency-symbol-map: sanity check every value in map', t => {
  const currencies = Object.keys(currencySymbolMap)
  const obj = {}
  currencies.forEach(code => { obj[code] = getSymbolFromCurrency(code) })
  t.deepEqual(obj, currencySymbolMap)
  t.end()
})

test('currency-symbol-map: no symbols should be missing', t => {
  for (const code in currencySymbolMap) {
    t.equal(typeof currencySymbolMap[code], 'string', `Symbol of ${code} should be a string`)
    t.isNotEqual(currencySymbolMap[code], '', `Symbol of ${code} should not be empty`)
  }
  t.end()
})

test('currency-symbol-map: codes should be in alphabetical order', t => {
  const currencies = Object.keys(currencySymbolMap)
  const sorted = Object.keys(currencySymbolMap).sort((a, b) => a.localeCompare(b))
  t.deepEqual(currencies, sorted)
  t.end()
})
