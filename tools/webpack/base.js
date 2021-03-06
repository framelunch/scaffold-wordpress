const globby = require('globby');
const path = require('path');

const conf = require('../config');
const entry = {};
globby.sync(conf.script.entries)
  .forEach((filename) => {
    const basename = path.basename(filename, path.extname(filename));
    entry[basename] = `./${filename}`;
  });

module.exports = {
  entry,
  output: {
    filename: '[name].js',
    sourceMapFilename: '[name].map' //inline-source-mapの時は特に必要ないが一応
  },
  optimization: {
    splitChunks: {
      name: 'vendor',
      chunks: 'initial',
    }
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['.jsx', '.js']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          'cache-loader',
          {
            loader: 'babel-loader',
            options: conf.script.babelOptions
          }
        ]
      },
      {
        test: /\.(jpg|png|gif)$/,
        use: {
          loader: 'url-loader',
          options: {
            name: '[name].[ext]'
          }
        }
      },
      {
        test: /\.svg$/,
        use: 'svg-inline-loader'
      },
      {
        test: /\.(txt|log|md)$/,
        use: 'raw-loader'
      }
    ]
  }
};
