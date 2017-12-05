'use strict';


//script & style tags
const HTMLPlugin = require('html-webpack-plugin');
const ExtractPlugin = require('extract-text-weback-plugin');
//create css bundle


module.exports = {
  entry: `$__dirname}/src/main.js`,
//load this
  devtool: 'source-map',

  output: {
    filename: 'bundle.[hash].js',
    path: `$__dirname}/build`
  },
//put into path folder

  plugins: [
    new HTMLPlugin({
      template: `${__dirname}/src/index.html`
    }),

    new ExtractPlugin('bundle.[hash].css');
  ],

//if js file not in node_modules, use babel load
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    },
//if .scss file, these get loaded in reverse order and the output of one pipe
    {
      test: /\.scss$/,
      loader: ExtractPlugin.extract({
        use: [{
          loader: 'css-loader',
          options: {
            sourceMap: true
          }
        },
        'resolve-url-loader',
        {
          loader: 'sass-loader',
          options: {
            sourceMap: true,
            includePaths: [`${__dirname}/src/style`]
          }
        }
        ]
      })
    },
    }]
  };



































//webpack will bundle up all javascript files into one file
