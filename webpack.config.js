const path = require('path')

module.exports = {
  entry: './browser.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'currency-symbol-map.min.js',
    library: {
      name: 'CurrencySymbolMap',
      type: 'window'
    }
  },
  resolve: {
    extensions: ['.js']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname),
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    ]
  }
}
