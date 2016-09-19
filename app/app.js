/**
 * Copyright (c) 2014 Meizu bigertech, All rights reserved.
 * http://www.bigertech.com/
 * @author Chester
 * @date  15/8/25
 * @description
 *
 */
import React from 'react'
import { Router, Route, Link, browserHistory } from 'react-router'
import ReactRouterLoader from 'react-router-loader'

React.render((
  <Router history={browserHistory}>
    <Route path="/" component={require('react-router!./page/home/index')} />
    <Route path="goods" component={require('react-router!./page/goods/index')} />
    <Route path="community" component={require('react-router!./page/community/index')} />
    <Route path="order" component={require('react-router!./page/order/index')} />
    <Route path="user" component={require('react-router!./page/user/index')} />
  </Router>
), document.querySelector('.page'))