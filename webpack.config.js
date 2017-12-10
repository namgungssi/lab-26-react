'use strict';



const HTMLPlugin = require('html-webpack-plugin');
const ExtractPlugin = require('extract-text-webpack-plugin');



module.exports = {

  //Load
  entry: `${__dirname}/src/main.js`,

  devtool: 'source-map',

  output: {
    filename: 'bundle.[hash].js',
    path: `${__dirname}/build`
  },

  plugins: [
    new HTMLPlugin({
      template: `${__dirname}/src/index.html`
    }),
    new ExtractPlugin('bundle.[hash].css')
  ],

  module: {
    rules: [
      //If it's a .js file not in node_modules, use the babel-loader
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      //.scss file
      {
        test: /\.scss$/,
        loader: ExtractPlugin.extract({
          // These get loaded in reverse order and the output of one pipes into the other (think of a then)
          use: [
            {
              loader: 'css-loader',
              options: {
                sourceMap: true,
              },
            },
            'resolve-url-loader',
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true,
                includePaths:[`${__dirname}/src/style`],
              },
            },
          ],
        }),
      },
    ],
  },
};
