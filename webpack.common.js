const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const path = require('path');

module.exports = {
  devtool: "none", // use to remove eval function from bundle.js file
  entry: {
    index: "./src/index.js",
    vendor: "./src/vendor.js"
  },

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

        test: /\.html$/i,
        use: ["html-loader"]

      },

      {
        test: /\.(svg|png|jpe?g|gif)$/i,
        use: {
        loader: "file-loader",
        options: {
          name: "[name].[hash].[ext]",
          outputPath: "imgs"
        }
      }
      },


  ]
  },
  // resolve: {
  //   extensions: ['.json', '.js', '.jsx']
  // }
 
};