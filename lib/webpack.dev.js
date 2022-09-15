const merge = require('webpack-merge');
const webpack = require('webpack');
const chalk = require('chalk');
const baseConfig = require('./webpack.base');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const address = require('address');

process.env.PORT = '8990';

/**
 * @type {import('webpack').Configuration}
 */
const devConfig = {
  mode: 'production',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new FriendlyErrorsWebpackPlugin({
      compilationSuccessInfo: {
        messages: [
          'Your application is running here:',
          `${chalk.bold('Local:')} ${chalk.green(`http://localhost:${process.env.PORT}`)}`,
          `${chalk.bold('Network:')} ${chalk.green(`http://${address.ip()}:${process.env.PORT}`)}`
        ],
      },
      clearConsole: true
    }),
  ],
  devServer: {
    // contentBase: '../dist',
    hot: true,
    stats: 'errors-only',
    open: true,
    openPage: `http://localhost:${process.env.PORT || 8990}`, //配置默认打开哪个页面
    port: process.env.PORT || 8990,
    quiet: true,
    host: '0.0.0.0',
  },
  devtool: 'source-map',
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  }
};

module.exports = merge(baseConfig, devConfig);
