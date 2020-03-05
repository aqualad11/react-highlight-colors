var path = require('path');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
//var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry:path.resolve(__dirname) + '/src/index.js',
  externals: {
    react: 'commonjs react',
    'react-dom': 'commonjs react-dom'
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.js',
    libraryTarget: 'commonjs2'
  },
  plugins: [new MiniCssExtractPlugin()],
  resolve: {
    alias: {
      react: path.resolve('./node_modules/react')
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /(node_modules|bower_components|build)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }, {
        test: /\.*css$/i,
        use : [MiniCssExtractPlugin.loader, 'css-loader'] 
      },
    ]
  }
};
