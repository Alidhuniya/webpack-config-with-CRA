
const path = require('path');
const common = require("./webpack.common");
const { merge } = require("webpack-merge");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common,  {
  mode: 'production',
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: "[name].[contenthash].bundle.js",
    chunkFilename: '[name].js'
  },

  plugins: [
    new MiniCssExtractPlugin ({
      filename: "[name].[contentHash].css"
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html"
    }),   
  ],

  module: {
    rules: [
      
        // {
        //   test: /\.css$/i,
        //   use: ['style-loader', 'css-loader'],
        // },
    
         {
            test: /\.scss$/,
            use: [
              MiniCssExtractPlugin.loader, //extract css into files
              // Translates CSS into CommonJS
              'css-loader',
              // Compiles Sass to CSS
              'sass-loader',
            ],
          },
    ]
  }
 
});