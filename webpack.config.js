'use strict';

const path = require('path');
const webpack = require('webpack');
const { devtool, rules, plugins } = require('./webpack.common');
const isDev = process.env.NODE_ENV !== 'production';

const HTMLPlugin = require('html-webpack-plugin');
const html = new HTMLPlugin({
  title: 'test app',
  template: 'src/index.template.ejs',
  inject: false,
  filename: 'index.html'
});

const svgSpriteRule = {
  test: /\.svg$/,
  use: ['svg-sprite-loader']
};

// ---- entry

const entry = {
  app: ['./src/app.js']
};

// ---- output

const output = {
  path: path.resolve(__dirname, 'public'),
  filename: isDev ? '[name].bundle.js' : '[name].[chunkhash].js',
  publicPath: '/'
};

const vendor = [
  'modern-normalize', // css -> vendor.xxx.css
  'babel-polyfill',
  'redux',
  'react',
  'react-dom',
  'react-router-dom'
];

// if (!isDev) entry.vendor = vendor; // generate common vendor bundle in prod

// if (isDev) {
//   const dllRefPlugin = new webpack.DllReferencePlugin({
//     context: '.',
//     manifest: require('./public/vendor-manifest.json')
//   });
//   plugins.push(dllRefPlugin);
// }

// since we don't use dll plugin for now - we still get vendor's bundled in a separate bundle
// entry.vendor = vendor;
// entry.react = react;

plugins.push(html);

const mode = isDev ? 'development' : 'production';

module.exports = {
  // devtool,
  entry,
  output,
  mode,
  module: {
    rules: [svgSpriteRule, ...rules]
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      // see https://gist.github.com/sokra/1522d586b8e5c0f5072d7565c2bee693#optimizationruntimechunk
      cacheGroups: {
        core: {
          test: module => {
            if (/\/node_modules\/core-js\//.test(module.resource)) return true;
          },
          chunks: 'all'
        }
      }
    },
    runtimeChunk: true
  },
  plugins
};
