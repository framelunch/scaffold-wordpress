const webpack = require('webpack');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const base = require('./base');
const conf = require('../config');

module.exports = {
  ...base,
  mode: 'development',
  devtool: 'inline-source-map',
  module: {
    rules: [
      ...base.module.rules,
      {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        use: [
          'cache-loader',
          {
            loader: 'ts-loader',
            options: { transpileOnly: true },
          },
        ],
      },
    ],
  },
  plugins: [new webpack.LoaderOptionsPlugin({ debug: true }), new ForkTsCheckerWebpackPlugin()],
};
