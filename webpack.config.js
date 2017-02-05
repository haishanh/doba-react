const path = require('path');
const autoprefixer = require('autoprefixer');
const webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: {
    app: ['./src/app.js']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loaders: ['babel-loader']
    }, {
      test: /\.scss$/,
      loaders: [
        'style-loader',
        'css-loader',
        'postcss-loader',
        'sass-loader'
      ]
    }]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.LoaderOptionsPlugin({
      options: {
        sassLoader: {
          outputStyle: 'expanded'
        },
        postcss: () => [autoprefixer]
      }
    })
  ]
};
