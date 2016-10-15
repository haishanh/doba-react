const webpack = require('webpack');
const devConfig = require('./webpack.config');

const plugins = [
  new webpack.optimize.DedupePlugin(),
  // new webpack.optimize.UglifyJsPlugin({
  //   minimize: true,
  //   compress: {
  //     warnings: false
  //   }
  // }),
  new webpack.LoaderOptionsPlugin({
    minimize: true,
    debug: false
  }),
  new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('production')
    }
  })
];


// devConfig.devtool = 'cheap-module-source-map';
devConfig.devtool = 'source-map';
devConfig.plugins = plugins;


module.exports = devConfig;