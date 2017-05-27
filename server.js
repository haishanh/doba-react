'use strict';

const path = require('path');
const config = require('./webpack.config.dev');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');

const port = process.argv[2] ? process.argv[2] - 0 : 3000;
config.entry.app.unshift(
  'react-hot-loader/patch',
  // activate HMR for React

  'webpack-dev-server/client?http://0.0.0.0:' + port,
  // bundle the client for webpack-dev-server
  // and connect to the provided endpoint

  'webpack/hot/only-dev-server'
  // bundle the client for hot reloading
  // only- means to only hot reload for successful updates
);
config.plugins.push(
  new webpack.HotModuleReplacementPlugin(),
  // enable HMR globally

  new webpack.NamedModulesPlugin()
  // prints more readable module names in the browser console on HMR updates
);

const compiler = webpack(config);
new WebpackDevServer(compiler, {
  hot: true,
  // enable HMR on the server
  contentBase: path.join(__dirname, 'dist'),
  stats: {
    colors: true,
    chunks: false,
    chunkModules: false
  },
  publicPath: config.output.publicPath,
  historyApiFallback: true
}).listen(port, '0.0.0.0', () => {
  console.log('\n>> Listening at http://0.0.0.0:' + port + '\n');
});
