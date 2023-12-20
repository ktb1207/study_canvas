const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

console.log(path.join(path.resolve(__dirname), './src/index.js'))

module.exports = {
  entry: path.join(path.resolve(__dirname), './src/index.js'),
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
    // HMR
    hot: true
  },
  output:{
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  resolve: {
    extensions: ['.js', '.json', '.jsx', '.ts', '.tsx'],
    alias: {
      '@': path.resolve('src')
    }
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-proposal-object-rest-spread']
          }
        }
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'webpack for canvas',
      template: path.join(path.resolve(__dirname), './public/index.html')
    })
  ]
}
