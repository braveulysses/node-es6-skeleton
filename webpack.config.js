var path = require('path');

module.exports = {
  output: {
    path: path.join(__dirname, 'dist'),
    library: '[name]',
    libraryTarget: 'commonjs2',
    filename: '[name].js'
  },

  target: 'node',

  entry: {
    index: './src/index.js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            query: {
              presets: ['es2015'],
              plugins: ['syntax-flow', 'transform-flow-strip-types']
            }
          },
          {
            loader: 'eslint-loader'
          }
        ]
      }
    ]
  }
};