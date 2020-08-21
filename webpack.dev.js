
const path = require('path');
const common = require("./webpack.common");
const { merge } = require("webpack-merge");

module.exports = merge(common,{
  mode: 'development',
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

     {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },

  ]
  },
  // resolve: {
  //   extensions: ['.json', '.js', '.jsx']
  // }
 
});