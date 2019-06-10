const path = require('path');
const webpack = require('webpack');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const globby = require('globby');

const conf = require('../config');

const tsconfigPath = path.join(process.cwd(), 'tsconfig.production.json');
const entry = {};
globby.sync(conf.customizer.entries).forEach(filename => {
  const basename = path.basename(filename, path.extname(filename));
  entry[basename] = `./${filename}`;
});

module.exports = {
  entry,
  output: {
    filename: '[name].js',
    sourceMapFilename: '[name].map', //inline-source-mapの時は特に必要ないが一応
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['.json', '.tsx', '.ts', '.jsx', '.js'],
  },
  cache: false,
  module: {
    rules: [
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
  plugins: [new webpack.LoaderOptionsPlugin({ debug: false })],
};
