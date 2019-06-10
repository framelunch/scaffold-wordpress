const path = require('path');
const webpack = require('webpack');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const base = require('./base');
const conf = require('../config');

const tsconfigPath = path.join(process.cwd(), 'tsconfig.production.json');

module.exports = {
  ...base,
  mode: 'production',
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
            options: { transpileOnly: true, configFile: tsconfigPath },
          },
        ],
      },
    ],
  },
  plugins: [new webpack.LoaderOptionsPlugin({ debug: false }), new ForkTsCheckerWebpackPlugin(tsconfigPath)],
};
