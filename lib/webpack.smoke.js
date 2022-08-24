// smoke测试专用webpack配置文件

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const projectRoot = process.cwd();

/**
 * @type {import('webpack').Configuration}
 */
module.exports = {
  mode: 'production',
  entry: {
    index: path.join(projectRoot, './src/index.js'),
  },
  output: {
    path: path.join(projectRoot, 'dist'),
    filename: '[name]-[hash:8].js',
  },
  module: {
    rules: [
      {
        test: /.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/react', '@babel/env'],
            },
          },
        ],
      },
      {
        test: /.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name]-[contenthash:8].css',
    }),
    new HtmlWebpackPlugin({
      template: path.join(projectRoot, './src/index.html'),
      filename: 'index.html', // 打包完之后的文件名
      inject: true, // js注入到哪里head还是body,true表示注入body里
      chunks: ['index'],
      // favicon: "./public/favicon.ico",
      minify: {
        html5: true,
        collapseWhitespace: false, // 折叠空白
        preserveLineBreaks: false,
        minifyCSS: false,
        minifyJS: true,
        removeComments: true,
      },
    }),
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
  ],
  devtool: 'cheap-source-map',
  devServer: {
    contentBase: path.join(projectRoot, './dist'), // 服务器根
    compress: true, // 是否压缩
    port: 8889,
  },
};
