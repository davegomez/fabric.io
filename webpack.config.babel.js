import path from 'path';

const SRC = path.resolve(__dirname, 'src');
const LIB = path.resolve(__dirname, 'lib');

module.exports = {
  entry: SRC,

  output: {
    path: LIB,
    filename: 'index.js'
  },

  module: {
    preLoaders: [
      { test: /\.js?$/, loaders: ['eslint', 'jscs'], include: SRC }
    ],
    loaders: [
      { test: /\.js?$/, loader: 'babel', include: SRC }
    ]
  }
};
