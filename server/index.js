// var React = require('react');
// var ReactDOMServer = require('react-dom/server');
//
// function element(requireUrl){
//     return React.createElement('div', null, requireUrl);
// }
//
// // server
// var express = require('express');
// var app = express();
//
// app.get('*', function(req, res){
//     var html = ReactDOMServer.renderToString(element(req.originalUrl));
//     res.send(html);
//     console.log('============= require url =============\n' + req.originalUrl + '\n')
//     console.log('================ html =================\n' + html + '\n')
// });
//
// app.listen(5000);
import { renderToString } from 'react-dom/server'
import { match, RoutingContext } from 'react-router'
import express from 'express'
import React from 'react'
import routes from '../app/routes'

const app = express()

app.use(function (req, res) {
  match({ routes: routes, location: req.url }, function (error, redirectLocation, renderProps) {
    if (error) {
      res.send(500, error.message);
    } else if (redirectLocation) {
      //  res.redirect(302, redirectLocation.pathname + redirectLocation.search)
    } else if (renderProps) {
        console.log(renderToString(React.createElement(RoutingContext, renderProps)))
      res.send(200, renderToString(React.createElement(RoutingContext, renderProps)));
    } else {
      res.send(404, 'Not found');
    }
  });
});

app.listen(5000)
