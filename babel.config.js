'use strict';

const presets = [
  [
    '@babel/preset-env',
    {
      modules: false,
      useBuiltIns: 'usage',
      targets: {
        browsers: ['>0.25%', 'not ie 11', 'not op_mini all']
      }
    }
  ],
  '@babel/preset-react'
];

const plugins = [
  [
    '@babel/plugin-transform-runtime',
    {
      corejs: false,
      helpers: true,
      regenerator: true,
      useESModules: true
    }
  ],
  [
    '@babel/plugin-proposal-decorators',
    {
      decoratorsBeforeExport: true
    }
  ],
  '@babel/plugin-syntax-dynamic-import',
  '@babel/plugin-proposal-class-properties',
  '@babel/plugin-proposal-export-default-from'
];

module.exports = api => {
  api.cache(true);
  return { presets, plugins };
};
