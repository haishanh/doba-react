const path = require('path');
const autoprefixer = require('autoprefixer');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');
// const FaviconsWebpackPlugin = require('favicons-webpack-plugin')
const webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  // https://webpack.js.org/configuration/devtool/
  entry: {
    app: ['./src/app.js'],
    vendor: ['react', 'react-dom', 'redux', 'react-router-dom']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    publicPath: ''
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.svg$/,
        loader: 'svg-sprite-loader'
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity
    }),
    new BundleAnalyzerPlugin(),
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
