import React, { Component } from 'react'
import './style.sass'

export default React.createClass({
  	render() {
	    return <div className="aa"
	    	>
				<h3>Inbox</h3>
				{this.props.children || "Welcome to your Inbox"}
			</div>
  	}
})