var webpack = require( 'webpack' );
var pkg = require('./package.json');
var info = 'project: ' + pkg.name;
info += '\nauthor: ' + pkg.author;
info += '\nupdate: ' + new Date;
info += '\nversion: ' + pkg.version;

module.exports = {
  context: __dirname + '/src',
  entry: {
    javascript: './index.js'
  },

  output: {
    filename: 'bundle.js',
    path: __dirname + '/js',
  },
  plugins: [
    new webpack.BannerPlugin( info ),
    new webpack.optimize.UglifyJsPlugin()
  ],
  module: {
    loaders: [
      {
          test: /\.js$/,
          loader: 'babel-loader',
          //exclude: /node_modules/,
          query: {
              cacheDirectory: true,
              presets: ['es2015', 'react']
          }
      }
    ]
  }
}
