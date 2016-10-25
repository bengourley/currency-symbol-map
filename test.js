var assert = require('assert');

var getSymbol = require('./currency-symbol-map');
var getSymbolFromCurrency = require('./currency-symbol-map').getSymbolFromCurrency;
var getCurrencyFromSymbol = require('./currency-symbol-map').getCurrencyFromSymbol;
var symbolCurrencyMap = require('./currency-symbol-map').symbolCurrencyMap;
var currencySymbolMap = require('./currency-symbol-map').currencySymbolMap;

describe('currency-symbol-map', function() {
  describe('getSymbolFromCurrency()', function () {

    describe('invalid params', function() {
      it('should return undefined when param is not a string', function () {
        assert.equal(undefined, getSymbolFromCurrency(1));
      });

      it('should return undefined when param is null', function () {
        assert.equal(undefined, getSymbolFromCurrency(null));
      });

      it('should return undefined when param is false', function () {
        assert.equal(undefined, getSymbolFromCurrency(false));
      });

      it('should return undefined when param is undefined', function () {
        assert.equal(undefined, getSymbolFromCurrency());
      });
    })

    describe('valid params', function() {
      it('should return $ when USD is provided', function () {
        assert.equal('$', getSymbolFromCurrency('USD'));
      });

      it('should return £ when GBP is provided', function () {
        assert.equal('£', getSymbolFromCurrency('GBP'));
      });

      it('should return € when EUR is provided', function () {
        assert.equal('€', getSymbolFromCurrency('EUR'));
      });

      it('should return undefined when code is non-existent', function() {
        assert.equal(undefined, getSymbolFromCurrency('NON-EXISTENT-CODE'));
      });

      describe('allows for lowercase params', function() {
        it('should return € when EUR is provided', function () {
          assert.equal('€', getSymbolFromCurrency('eur'));
        });
      })

    })

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

    it('should return undefined when symbol is non-existent', function() {
      assert.equal(undefined, getCurrencyFromSymbol('NON-EXISTENT-SYMBOL'));
    });

  });

  describe('getSymbol() [deprecated]', function() {
    describe('invalid params', function() {

      it('should return undefined when param is not a string', function () {
        assert.equal('?', getSymbol(1));
      });

      it('should return undefined when param is null', function () {
        assert.equal('?', getSymbol(null));
      });

      it('should return undefined when param is false', function () {
        assert.equal('?', getSymbol(false));
      });

      it('should return undefined when param is undefined', function () {
        assert.equal('?', getSymbol());
      });

    })

    describe('valid params', function() {

      it('should return $ when USD is provided', function() {
        assert.equal('$', getSymbol('USD'));
      });

      it('should return £ when GBP is provided', function() {
        assert.equal('£', getSymbol('GBP'));
      });

      it('should return € when EUR is provided', function() {
        assert.equal('€', getSymbol('EUR'));
      });

      it('should return ? when code is non-existent', function() {
        assert.equal('?', getSymbol('NON-EXISTENT-CODE'));
      });

      describe('allows for lowercase params', function() {

        it('should return € when EUR is provided', function () {
          assert.equal('€', getSymbol('eur'));
        });

      })
    })
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
