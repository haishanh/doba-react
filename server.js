'use strict';

const path = require('path');
const config = require('./webpack.config');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');

const port = process.argv[2] ? process.argv[2] - 0 : 3000;
config.entry.app.unshift(
  'webpack-dev-server/client?http://0.0.0.0:' + port,
  'webpack/hot/dev-server'
);
config.plugins.push(
  new webpack.HotModuleReplacementPlugin()
);

const compiler = webpack(config);
new WebpackDevServer(compiler, {
  hot: true, // HMR pugin is also needed
  contentBase: path.join(__dirname, 'dist'),
  stats: {
    colors: true,
    chunks: false,
    chunkModules: false
  },
  publicPath: config.output.publicPath,
  historyApiFallback: true
}).listen(port, '0.0.0.0', () => {
  console.log('Listening at http://0.0.0.0:' + port);
});
