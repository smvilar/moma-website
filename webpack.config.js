const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'production',
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
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'assets/index.ejs',
    }),
    new CopyPlugin({
      patterns: [
        { from: 'static' },
      ],
    }),
  ],
};
