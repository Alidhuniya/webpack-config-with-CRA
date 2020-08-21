const path = require('path');

module.exports = {
  mode: 'development',
  devtool: "none", // use to remove eval function from bundle.js file
  entry: path.join(__dirname, 'src', 'index'),
  watch: true,
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: "bundle.js",
    chunkFilename: '[name].js'
  },
  module: {
    rules: [{
      test: /.jsx?$/,
      include: [
        path.resolve(__dirname, 'src')
      ],
      exclude: [
        path.resolve(__dirname, 'node_modules')
      ],
      loader: 'babel-loader',
      query: {
        presets: [
          ["@babel/env",  {
            "targets": {
              "browsers": "last 2 chrome versions"
            }
          }]
        ]
      }
    },

    // es-lint-configuration: https://webpack.js.org/loaders/eslint-loader/

    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: ['babel-loader', 'eslint-loader'],
    },

    {
      enforce: 'pre',
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'eslint-loader',
    },
    {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
    }
  
  ]
  },
  // resolve: {
  //   extensions: ['.json', '.js', '.jsx']
  // }
 
};