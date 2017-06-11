const path = require('path');

module.exports = {
  entry: './app/js/app.js',
  output: {
    path: __dirname + '/static/js/', 
    filename: 'index_bundle.js'
  },
  watch: true,
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
    ]
  },
  devServer: {
    headers: { "Access-Control-Allow-Origin": "*" }
  },
}

