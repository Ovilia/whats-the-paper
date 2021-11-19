const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    background: './src/background.ts'
  },
  // devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: [/node_modules/, /screenshot/, /dist/]
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  output: {
    filename: 'dist/[name].js',
    path: path.resolve(__dirname, '.')
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: 'assets', to: 'dist' }
      ],
    }),
    // new HtmlWebpackPlugin({
    //   template: './src/index.html',
    //   inject: false,
    //   chunks: ['app']
    // })
  ]
};
