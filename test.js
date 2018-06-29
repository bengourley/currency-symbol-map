const test = require('tape');

const { getSymbolFromCurrency, safeGetSymbolFromCurrency } = require('./currency-symbol-map');
const currencySymbolMap = require('./map');

test('getSymbolFromCurrency(): valid params', t => {
  t.equal('$', getSymbolFromCurrency('USD'), 'should return $ when USD is provided');
  t.equal('£', getSymbolFromCurrency('GBP'), 'should return £ when GBP is provided');
  t.equal('€', getSymbolFromCurrency('EUR'), 'should return € when EUR is provided');
  t.equal('€', getSymbolFromCurrency('eur'), 'should return € when eur is provided');
  t.equal(
    undefined,
    getSymbolFromCurrency('NON-EXISTENT-CODE'),
    'should return undefined when code is non-existent'
  );
  t.end();
});

test('getSymbolFromCurrency(): invalid params', t => {
  t.equal(
    undefined,
    getSymbolFromCurrency(1),
    'should return undefined when param is not a string'
  );
  t.equal(undefined, getSymbolFromCurrency(null), 'should return undefined when param is null');
  t.equal(undefined, getSymbolFromCurrency(false), 'should return undefined when param is false');
  t.equal(undefined, getSymbolFromCurrency(), 'should return undefined when param is undefined');
  t.end();
});

test('safeGetSymbolFromCurrency(): valid params', t => {
  t.equal('$', safeGetSymbolFromCurrency('USD'), 'should return safe $ when USD is provided');
  t.equal('£', safeGetSymbolFromCurrency('GBP'), 'should return safe £ when GBP is provided');
  t.equal('€', safeGetSymbolFromCurrency('EUR'), 'should return safe € when EUR is provided');
  t.equal('€', safeGetSymbolFromCurrency('eur'), 'should return safe € when eur is provided');
  t.equal(
    'NON-EXISTENT-CODE',
    safeGetSymbolFromCurrency('NON-EXISTENT-CODE'),
    'should return the input when code could not be found'
  );
  t.end();
});

test('safeGetSymbolFromCurrency(): invalid params', t => {
  t.equal(
    1,
    safeGetSymbolFromCurrency(1),
    'should return safe undefined when param is not a string'
  );
  t.equal(null, safeGetSymbolFromCurrency(null), 'should return safe undefined when param is null');
  t.equal(
    false,
    safeGetSymbolFromCurrency(false),
    'should return safe undefined when param is false'
  );
  t.equal(
    undefined,
    safeGetSymbolFromCurrency(),
    'should return safe undefined when param is undefined'
  );
  t.end();
});

test('currency-symbol-map: sanity check every value in map', t => {
  const currencies = Object.keys(currencySymbolMap);
  const obj = {};
  currencies.forEach(code => {
    obj[code] = getSymbolFromCurrency(code);
  });
  t.deepEqual(obj, currencySymbolMap);
  t.end();
});
