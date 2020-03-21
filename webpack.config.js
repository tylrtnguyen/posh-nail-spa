const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: [
      './public/js/index.js',
      './public/lib/bootstrap/js/bootstrap.bundle.min.js',
      './public/lib/wow/wow.min.js',
      './public/lib/mobile-nav/mobile-nav.js',
      './public/lib/bootstrap/css/bootstrap.min.css',
      './public/lib/ionicons/css/ionicons.min.css',
      './public/lib/font-awesome/css/font-awesome.min.css',
      './public/css/style.css'
    ],
    output: {
      path: path.join(__dirname, 'dist'),
      publicPath: '/',
      filename: 'bundle.js'
    },
    target: 'node',
    node: {
    // Need this when working with express, otherwise the build fails
    __dirname: false,   // if you don't put this is, __dirname
    __filename: false,  // and __filename return blank or /
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "script-loader"
          }
        },
        {
          test: /\.css$/,
          use: [
            {
              loader: "style-loader"
            },
            {
                loader:"css-loader"
            }
          ]
        },
        {
            test   : /\.(ttf|jpeg|png|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
            use:[ {
                loader : 'file-loader',
            }] 
        }
      ]
    },
    plugins: [new HtmlWebpackPlugin({
        template: './index.html',
        filename: './index.html',
        excludeChunks: ['app'] 
    }        
    )],
  };