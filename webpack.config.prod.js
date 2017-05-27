const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const baseConfig = require('./webpack.config.base');

const sassProdRule = {
  test: /\.scss$/,
  use: ExtractTextPlugin.extract({
    fallback: 'style-loader',
    use: [
      {
        loader: 'css-loader'
      },
      {
        loader: 'postcss-loader',
        options: {
          plugins: () => [require('autoprefixer')]
        }
      },
      {
        loader: 'sass-loader'
      }
    ]
  })
};

// -p option is added in CLI
// new webpack.optimize.UglifyJsPlugin() is not needed here
const plugins = [
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify('production')
    }
  }),
  new ExtractTextPlugin({
    filename: 'style.css',
    allChunks: true
  })
];

baseConfig.devtool = 'source-map';
baseConfig.module.rules.push(sassProdRule);
baseConfig.plugins = [...baseConfig.plugins, ...plugins];

module.exports = baseConfig;
