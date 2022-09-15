const cssnano = require('cssnano');
const merge = require('webpack-merge');
const chalk = require('chalk');
const HtmlWebpackExternalsPlugin = require('html-webpack-externals-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const baseConfig = require('./webpack.base');
const SpeedMeasureWebpackPlugin = require('speed-measure-webpack-plugin');

const smp = new SpeedMeasureWebpackPlugin();

/**
 * @type {import('webpack').Configuration}
 */
const prodConfig = {
    mode: 'production',
    plugins: [
        new OptimizeCSSAssetsPlugin({
            assetNameRegExp: /\.css/g,
            cssProcessor: cssnano,
        }),
        new HtmlWebpackExternalsPlugin({
            externals: [
                {
                  module: 'react',
                  entry: 'https://now8.gtimg.com/now/lib/16.8.6/react.min.js',
                  global: 'React',
                },
                {
                  module: 'react-dom',
                  entry: 'https://now8.gtimg.com/now/lib/16.8.6/react-dom.min.js',
                  global: 'ReactDOM',
                },
            ],
        }),
        new FriendlyErrorsWebpackPlugin({
            compilationSuccessInfo: {
                messages: [chalk.cyanBright('build success')]
            },
            clearConsole: true
        })
    ],
    optimization: {
        splitChunks: {
            minSize: 0,
            cacheGroups: {
                commons: {
                    name: 'vendors',
                    chunks: 'all',
                    minChunks: 2
                }
            }
        }
    }
}

module.exports = smp.wrap(merge(baseConfig, prodConfig));


