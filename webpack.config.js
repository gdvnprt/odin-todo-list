const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
  index: './src/index.js',
  storage: './src/storage.js',
  project: './src/project.js',
  todo: './src/todo.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      title: 'To-Do Lists',
    }),

  ],
  devtool: 'inline-source-map',
  output: {
    filename: '[name].main.js',
    path: path.resolve(__dirname, './dist'),
    clean: true,
  },
 
  module: {
    rules: [
     {
      test: /\.css$/i,
      use: ['style-loader', 'css-loader'],
     },
     {
      test: /\.(png|svg|jpg|jpeg|gif)$/i,
      type: 'asset/resource',
     },
    ],
  },
};