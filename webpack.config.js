const path = require('path');
const public = path.resolve(__dirname, 'public');
const dev = path.resolve(__dirname, 'dev/index.jsx');

module.exports = {
  entry: dev,
  output: {
    path: public,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { test: /\.js?x$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.(png|jpg|gif)$/, use: [{loader: 'file-loader', options: {}}]}
    ]
  }
}