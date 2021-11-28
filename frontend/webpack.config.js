const webpack = require('webpack');
const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path =require("path")

module.exports = {
  entry: ['./src/main.js'],
  output: {
    path: path.resolve(__dirname, '../build')
},
  devServer: {
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.(css|scss)$/,
        use: ['vue-style-loader', 'css-loader','sass-loader']
      }
    ]
  },
  resolve:{
      extensions:[".js",".vue",".json"],
    alias:{
        "@":path.resolve("src")
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      filename: './index.html',
      template: './public/index.html',
      inject: true
    })
  ]
};