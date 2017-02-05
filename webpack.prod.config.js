const webpack = require('webpack');
const devConfig = require('./webpack.config');

// -p option is added in CLI
// new webpack.optimize.UglifyJsPlugin() is not needed here
const plugins = [
  new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('production')
    }
  })
];


// devConfig.devtool = 'cheap-module-source-map';
devConfig.devtool = 'source-map';
devConfig.plugins = [...devConfig.plugins, ...plugins];

module.exports = devConfig;

