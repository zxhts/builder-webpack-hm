const merge = require('webpack-merge');
const webpack = require('webpack');
const chalk = require('chalk');
const baseConfig = require('./webpack.base');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

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
        messages: [`You application is running here ${chalk.green(`http://localhost:${process.env.PORT}`)}`],
      },
      clearConsole: true
    }),
  ],
  devServer: {
    // contentBase: '../dist',
    hot: true,
    stats: 'errors-only',
    port: process.env.PORT || 8990,
    quiet: true,
  },
  devtool: 'source-map',
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  }
};

module.exports = merge(baseConfig, devConfig);
