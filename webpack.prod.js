
const path = require('path');
const common = require("./webpack.common");
const { merge } = require("webpack-merge");

module.exports = merge(common,  {
  mode: 'production',
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: "bundle.[contenthash].js",
    chunkFilename: '[name].js'
  },
 
});