/**
 * Copyright (c) 2014 Meizu bigertech, All rights reserved.
 * http://wap.beautysite.cn/
 * @author Zhangling
 * @date  16/8/25
 * @description
 */
 
var path = require('path');

var config = {
  entry: path.resolve(__dirname, 'app/app.js'),
   output: {
    path: path.resolve(__dirname, './dist'),
    filename: "[name].js"
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
