const path = require('path');
const autoprefixer = require('autoprefixer');
const webpack = require('webpack');


module.exports = {
  devtool: 'eval',
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
    })
  ]
};
