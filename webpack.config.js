const path = require('path');
const root = path.join.bind(path, path.resolve(__dirname));

const src = root('src')
const dist = root('dist')

module.exports = {
  context: src,
  entry: {
    'serverless-app/index': './serverless-app/index.js'
  },
  output: {
    path: dist,
    publicPath: '/',
    filename: '[name].js',
    libraryTarget: 'umd'
  },
  target: 'node',
  mode: 'development',
  resolve: {
    modules: [src, 'node_modules'],
    extensions: ['.js'],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /(node_modules)/,
        include: src
      }
    ]
  }
}
