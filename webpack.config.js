const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const globImporter = require('node-sass-glob-importer');
const path = require('path');

module.exports = {
  entry: './src/js/app.js',
  output: {
    publicPath: '/',
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader'
          },
        ],
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/'
            }
          }
        ]
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
               {
                 loader: MiniCssExtractPlugin.loader,
               },
               {
                 loader: "css-loader",
               },
               {
                 loader: "postcss-loader",
               },
               {
                 loader: "sass-loader",
                 options: {
                   implementation: require("sass"),
                  //  importer: globImporter(),
                 }
               }
             ]
      }
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "main.bundle.css"
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './index.html'
    }),
  ],
  devServer: {
    contentBase: './dist',
    open: true
  },
}