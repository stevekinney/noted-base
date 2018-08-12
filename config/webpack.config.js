const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    main: path.join(__dirname, '..', '/src/index.js'),
  },
  output: {
    path: path.resolve(__dirname, '..', 'dist'),
    filename: '[name].[hash].bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file-loader?name=[name].[ext]',
      },
      {
        test: /\.jsx?$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.s?css$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                minimize: true,
                modules: true,
                importLoaders: true,
                localIdentName: '[name]__[local]--[hash:base64:5].css',
                sourcemaps: true,
              },
            },
            {
              loader: 'sass-loader',
              options: {
                sourcemaps: true,
              },
            },
          ],
        }),
      },
      {
        test: /\.s?css$/,
        include: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                minimize: true,
              },
            },
            {
              loader: 'sass-loader',
              options: {
                sourcemaps: true,
              },
            },
          ],
        }),
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
