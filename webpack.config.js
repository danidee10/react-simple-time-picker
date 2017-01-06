module.exports = {
  entry: './index.js',
  output: {
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015', 'react']
      }
    },
    { test: /\.css$/, loader: "style-loader!css-loader" }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  }
};
