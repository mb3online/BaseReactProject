module.exports = {
  entry: './src/main.js',
  devServer: {
    contentBase: "public/",
    port: 8080
  },
  output: {
    filename: 'bundle.js',
    publicPath: ''
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: "babel",
      include: __dirname
    }]
  }
}
