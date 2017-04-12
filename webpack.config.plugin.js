const path = require('path');
const webpack = require('webpack');

const moduleConfig = {
  rules: [{
    test: /\.js$/,
    loader: 'babel-loader',
    exclude: /node_modules/,
  }],
};

module.exports = {
  entry: './src/jquery.fusiontime.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'jquery-fusiontime-xt.js',
    library: 'jquery-fusiontime-xt',
    libraryTarget: 'umd',
  },
  externals: {
    jquery: 'jquery',
  },
  module: moduleConfig,
  devtool: '#eval-source-map',
};

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map';
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: 'production',
      },
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false,
      },
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
    }),
  ]);
}
