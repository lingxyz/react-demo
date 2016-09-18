import React, { Component } from 'react'

class Message extends Component {
  render() {
    return (
      <div>
        <h2>Message {this.props.params.id}</h2>
      </div>
    )
  }
}

module.exports = Message