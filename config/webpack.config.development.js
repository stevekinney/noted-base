const webpack = require('webpack');
const configuration = require('./webpack.config');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = Object.assign({}, configuration, {
  entry: {
    main: ['react-hot-loader/patch', configuration.entry.main],
  },
  mode: 'development',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin({
      allChunks: true,
      filename: '[name].css',
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      title: 'Marketing Campaigns',
    }),
  ],
  devServer: {
    historyApiFallback: {
      disableDotRule: true,
    },
    publicPath: configuration.output.publicPath,
    hot: true,
    compress: true,
    watchOptions: {
      ignored: /node_modules/,
    },
  },
});
