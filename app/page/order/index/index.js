import React from 'react'
import './style.sass'

import Footer from '../../../common/component/footer'

export default React.createClass ({
   render() {
	    return (
	      	<div>
	        	<h2>购物车 {this.props.params.id}</h2>
	        	<Footer />
	      	</div>
	    )
  	}
})