'use strict';

const path = require('path');

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  entry: path.resolve(__dirname, 'src', 'app.js'),

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name]-[hash].bundle.js',
  },

  resolve: {
    extensions: ['.js', '.jsx'],
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      'process.env.USE_MOCK_DATA': JSON.stringify(process.env.USE_MOCK_DATA),
    }),
    new HtmlWebpackPlugin({
      title: 'Amida Blog: あみぶろ',
      template: path.resolve(__dirname, 'src', 'index.html'),
      inject: false,
    }),
    //new BundleAnalyzerPlugin(),
  ],

  module: {
    rules: [
      {
        test: /\.m?jsx?$/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(png|svg|jpe?g|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext].webp",
            },
          },
          "webp-loader?{quality: 10}",
        ],
      },
    ],
  },

  target: 'web',

  devtool: 'none',

  mode: 'none',
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin(),
    ],
  }
};
