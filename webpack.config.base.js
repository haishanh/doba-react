const path = require('path');
const webpack = require('webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');
// const FaviconsWebpackPlugin = require('favicons-webpack-plugin')

process.env.BABEL_ENV = process.env.NODE_ENV;

// loader rules
const jsRule = {
  test: /\.js$/,
  exclude: /node_modules/,
  use: ['babel-loader']
};

const svgSpriteRule = {
  test: /\.svg$/,
  use: ['svg-sprite-loader']
};

const cssRule = {
  test: /\.css$/,
  use: ['style-loader', 'css-loader']
};

// plugins
const commonsChunkPlugin = new webpack.optimize.CommonsChunkPlugin({
  name: 'vendor',
  minChunks: Infinity
});

module.exports = {
  // https://webpack.js.org/configuration/devtool/
  devtool: 'eval',

  entry: {
    vendor: [
      'babel-polyfill',
      'react',
      'react-dom',
      'redux',
      'react-router-dom'
    ],
    app: ['./src/app.js']
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    publicPath: ''
  },

  module: {
    rules: [jsRule, svgSpriteRule, cssRule]
  },

  plugins: [
    commonsChunkPlugin,
    // new BundleAnalyzerPlugin(),
    // new FaviconsWebpackPlugin({
    //   logo: path.resolve(__dirname, 'src', 'doba.png'),
    //   theme_color: '#000000',
    //   icons: {
    //     appleStartup: false
    //   }
    // }),
    new HtmlWebpackPlugin({
      title: 'Doba',
      template: path.resolve(__dirname, 'src', 'index.ejs'),
      alwaysWriteToDisk: true
    }),
    new HtmlWebpackHarddiskPlugin()
  ]
};
