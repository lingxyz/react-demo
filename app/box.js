import React, { Component } from 'react'

class Box extends Component {
  render() {
    return (
      <div>
        <h3>Box</h3>
        {this.props.children || "Welcome to your Inbox"}
      </div>
    )
  }
}

module.exports = Box