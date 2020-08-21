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
    {
      test: /\.css$/i,
      use: ['style-loader', 'css-loader'],
    },
  ]
  },
  // resolve: {
  //   extensions: ['.json', '.js', '.jsx']
  // }
 
};