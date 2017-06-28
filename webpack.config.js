const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const autoprefixer = require("autoprefixer");

module.exports = {
  entry: {
    'javascripts/bundle.js': './source/javascripts/app.js',
    'stylesheets/bundle.css': './source/stylesheets/app.scss',
  },
  output: {
    path: __dirname + '/source/',
    filename: '[name]',
  },
  resolve: {
    modules: [
      'node_modules',
      path.resolve(__dirname, "source"),
    ],
  },
  module: {
    rules: [
      {
        // CSS
        test: /\.css$/,
        use: [{
          loader: 'style-loader',
        }, {
          loader: 'css-loader',
        }],
      }, {
        // SCSS
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: [{
            loader: 'css-loader',
          }, {
            loader: 'postcss-loader',
            options: {
              plugins: (loader) => [
                require('autoprefixer')(),
              ],
            },
          }, {
            loader: 'sass-loader',
            options: {
              includePaths: [ path.resolve(__dirname, 'source'), ],
            },
          }],
        }),
      }, {
        // Font Awesome
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: 'contents/base/fonts/font-awesome/[name].[ext]'
          }
        }],
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin(
      'stylesheets/bundle.css'
    ),
    new webpack.ProvidePlugin({
      u: 'umbrellajs',
      fade: 'fade',
    }),
  ],
};

