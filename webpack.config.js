const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
   entry: './src/index.jsx',
   output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name][fullhash].js',
      clean: true,
      publicPath: './',
   },
   plugins: [
      new HtmlWebpackPlugin({
         template: './src/index.html'
      }),
      new MiniCssExtractPlugin({
         filename: '[name][fullhash].css',
      }),
   ],
   devServer: {
      port: 5550,
      historyApiFallback: true,
      static: {
         directory: path.join(__dirname, 'dist')
      }
   },
   module: {
      rules: [
         {
            test: /\.jsx$/,
            exclude: /node_module/,
            use: {
               loader: "babel-loader",
               options: {
                  presets: [
                     '@babel/preset-env',
                     '@babel/preset-react'
                  ]
               }
            }
         },
         {
            test: /\.scss$/,
            use: [
               MiniCssExtractPlugin.loader,
               {
                  loader: "css-loader",
                  options: {
                     esModule: true,
                     modules: {
                        namedExport: true,
                        localIdentName: "[name]-[local]",
                     },
                  },
               },
               {
                  loader: 'sass-loader',
                  options: {
                     sassOptions: {
                        includePaths: ['node_modules'],
                     },
                  },
               },
            ]
         },
         {
            test: /\.css$/i,
            use: [MiniCssExtractPlugin.loader, "css-loader"],
         }
      ]
   }
};