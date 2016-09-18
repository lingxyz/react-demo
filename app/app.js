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

const App = React.createClass({
  render() {
    return (
      <div>
        <h1>App</h1>
        <ul>
          <li><Link to="/profile">profile</Link></li>
          <li><Link to="/box">Inbox</Link></li>
          <li><Link to="/message/123123">message</Link></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
})

React.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="profile" component={require('react-router!./page/profile')} />
        <Route path="message(/:id)" component={require('react-router!./page/message')} />
        <Route path="box" component={require('react-router!./page/box')}>
      </Route>
    </Route>
  </Router>
), document.getElementById('root'))