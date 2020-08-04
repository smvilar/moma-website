const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
      },
    }],
  },
  output: {
    filename: './bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'static',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'assets/index.ejs',
    }),
    new CopyPlugin({
      patterns: [
        { from: 'static' }
      ]
    })
  ],
  devServer: {
    contentBase: 'dist'
  }
};
