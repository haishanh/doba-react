'use strict';

const baseConfig = require('./webpack.config.base');

const sassDevRule = {
  test: /\.scss$/,
  use: [
    {
      loader: 'style-loader'
    },
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
};

baseConfig.module.rules.push(sassDevRule);

module.exports = baseConfig;
