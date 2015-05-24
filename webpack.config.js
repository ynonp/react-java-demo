// webpack.config.js
var path = require('path');

module.exports = {
  entry: 'main.js',
  output: {
    filename: 'web/js/bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js/, loader: 'jsx-loader' }
    ]
  },
  resolve: {
    extensions: ['', '.js']
  },
  externals: {
    "react" : "React",
    "underscore": "_"
  }
};

