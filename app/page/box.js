import React, { Component } from 'react'

var jason = require('../test/test.js');

class Box extends Component {
  render() {
    return (
      <div>
        <h3>Box</h3>
        {this.props.children || "Welcome to your Inbox"}
        <div>{jason.map(item => (
        	item.category
        ))}</div>
      </div>
    )
  }
}

module.exports = Box