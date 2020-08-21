const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');

module.exports = {
  devtool: "none", // use to remove eval function from bundle.js file
  entry: path.join(__dirname, 'src', 'index'),
  watch: true,
 

  plugins: [
    new CleanWebpackPlugin(), // help to clean dist folder generating new file with hash. This keeps one hash file with new generated hash
          
     ],

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
 
};