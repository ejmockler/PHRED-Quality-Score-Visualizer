const resolve = require('path').resolve
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const config = {
 entry: __dirname + '/js/index.jsx',
 devtool: 'eval-source-map',
 output: {
  path: resolve('../public'),
  filename: 'bundle.js',
  publicPath: resolve('../public')
 },
 resolve: {
  extensions: ['.js', '.jsx', '.css']
 },
 module: {
  rules: [{
   test: /\.(scss|sass|css)$/,
   exclude: /node_modules/,
   loaders: [
    MiniCssExtractPlugin.loader,
    {
     loader: 'css-loader',
     options: {
       modules: true,
       sourceMap: true,
       importLoaders: 1,
      }
     },
   'sass-loader',
  ]
 },
  {
   test: /\.jsx?/,
   loader: 'babel-loader',
   exclude: /node_modules/,
  },
  {
   test: /\.(png|jpg|gif|woff2)$/i,
   use: [
    {
     loader: 'url-loader',
     options: {
       limit: 8192,
     },
    },
   ]
  }]
 },
  plugins: [
   new MiniCssExtractPlugin({
    // Options similar to the same options in webpackOptions.output
    // both options are optional
    filename: "[name].css",
    chunkFilename: "[id].css"
   })
 ]
}

module.exports = config
