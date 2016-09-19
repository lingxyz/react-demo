import React from 'react'
import { Link } from 'react-router'
import './style.sass'

import { footers } from '../../../config.js'

export default React.createClass ({
   	/* 给当前 tab 加 class 'active' */
   	isCurrent(index) {
   		// 取当前 pathname 的索引 currentIndex
   		let pathnameArr = [];
   		footers.map((item, index) => {
			pathnameArr.push(item.pathname)
		})
   		let currentIndex = pathnameArr.indexOf(location.pathname);

   		// 若当前索引值 currentIndex 等于 循环索引值 index，
   		// 返回 class 'active'
        return index === currentIndex ? 'active' : '';
    },

  	render() {
	    return <footer
	    	>
			<ul>
				{ footers.map((item, index) => {
					return <li
							className={ this.isCurrent(index) }
						>
							<Link to={item.pathname}>{item.text}</Link>
						</li>
				}) }
	        </ul>
		</footer>
  	}
})