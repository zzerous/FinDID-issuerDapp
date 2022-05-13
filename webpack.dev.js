const path = require("path");
const {merge} = require('webpack-merge')
const { HotModuleReplacementPlugin, DefinePlugin } = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {GitRevisionPlugin} = require('git-revision-webpack-plugin')
const gitRevisionPlugin = new GitRevisionPlugin()

const devServerConfig = require('./configs/devServer.config')
const baseConfig = require('./webpack.base')
 
module.exports = merge(baseConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  output: {
    filename: '[name].bundle.js',
    publicPath: '/',
    path: path.resolve(__dirname, '/build')
  },
  devServer: devServerConfig,
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: { importLoaders: 1 },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'dev',
      template: path.resolve(__dirname, './src/index.html'),
      inject: true,
      origin: `http://localhost:8080/`,
    }),
    new DefinePlugin({
      DEV: true,
      'process.env.version': JSON.stringify(gitRevisionPlugin.commithash().slice(0, 7)), 
    }),
    new HotModuleReplacementPlugin(),
  ],
})
