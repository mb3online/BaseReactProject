module.exports = {
  entry: './src/main.jsx',
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
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: "babel",
      include: __dirname
    }]
  }
}
