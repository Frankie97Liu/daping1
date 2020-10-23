/*
 * @Author: your name
 * @Date: 2020-07-22 16:37:26
 * @LastEditTime: 2020-10-23 09:52:40
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /daping/.webpackrc.js
 */
const path = require('path');

export default {
  entry: 'src/index.js',
  extraBabelPlugins: [
    ['import', { libraryName: 'antd', libraryDirectory: 'es', style: true }],
  ],
  env: {
    development: {
      extraBabelPlugins: ['dva-hmr'],
    },
  },
  alias: {
    components: path.resolve(__dirname, 'src/components/'),
    '@@models': path.resolve(__dirname, 'src/models/'),
    '@@services': path.resolve(__dirname, 'src/services/'),
    '@@utils': path.resolve(__dirname, 'src/utils/'),
    '@@src': path.resolve(__dirname, 'src/'),
  },
  ignoreMomentLocale: true,
  theme: './src/theme.js',
  html: {
    template: './src/index.ejs',
  },
  disableDynamicImport: true,
  publicPath: '/',
  hash: true,
};
