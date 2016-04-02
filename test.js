var assert = require('assert');

var mapSymbol = require('./currency-symbol-map');
var getSymbolFromCurrency = require('./currency-symbol-map').getSymbolFromCurrency;
var getCurrencyFromSymbol = require('./currency-symbol-map').getCurrencyFromSymbol;
var symbolCurrencyMap = require('./currency-symbol-map').symbolCurrencyMap;
var currencySymbolMap = require('./currency-symbol-map').currencySymbolMap;

describe('currency-symbol-map', function() {
  describe('getSymbolFromCurrency()', function () {

    it('should return $ when USD is provided', function () {
      assert.equal('$', getSymbolFromCurrency('USD'));
    });

    it('should return £ when GBP is provided', function () {
      assert.equal('£', getSymbolFromCurrency('GBP'));
    });

    it('should return € when EUR is provided', function () {
      assert.equal('€', getSymbolFromCurrency('EUR'));
    });

  });

  describe('getCurrencyFromSymbol()', function() {

    it('should return USD when $ is provided', function() {
      assert.equal('USD', getCurrencyFromSymbol('$'));
    });

    it('should return GBP when £ is provided', function() {
      assert.equal('GBP', getCurrencyFromSymbol('£'));
    });

    it('should return EUR when € is provided', function() {
      assert.equal('EUR', getCurrencyFromSymbol('€'));
    });

  });
});

describe('currency-symbol-map [generated]', function() {
  describe('getSymbolFromCurrency()', function () {

    var generateTestName = function(symbol, currency) {
      return "should return " + symbol + " when " + currency + " is provided";
    };

    for (var symbol in symbolCurrencyMap) {
      var currency = symbolCurrencyMap[symbol];
      it.apply(this, [generateTestName(symbol, currency), function() {
        assert.equal(symbol, getSymbolFromCurrency(currency));
      }]);
    }

  });

  describe('getCurrencyFromSymbol()', function() {

    var generateTestName = function(symbol, currency) {
      return "should return " + currency + " when " + symbol + " is provided";
    };

    for (var currency in currencySymbolMap) {
      var symbol = currencySymbolMap[currency];
      it.apply(this, [generateTestName(symbol, currency), function() {
        assert.equal(currency, getCurrencyFromSymbol(symbol));
      }]);
    }

  });
});
