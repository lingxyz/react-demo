/**
 * Copyright (c) 2014 Meizu bigertech, All rights reserved.
 * http://www.bigertech.com/
 * @author Chester
 * @date  15/8/26
 * @description
 *
 */
var path = require('path');

var config = {
  entry: path.resolve(__dirname, 'app/app.js'),
   output: {
    path: path.resolve(__dirname, './dist')
  },
  module: {
    loaders: [{
      test: /\.js?$/,
      loader: 'babel'
    }, {
      test: /\.css$/,
      loader: 'style!css'
    }, {
      test: /\.less$/,
      loader: 'style!css!less'
    }, {
      test: /\.sass$/,
      loader: 'style!css!sass'
    }]
  }
};

module.exports = config;