import React from 'react'
import { Link } from 'react-router'
import './style.sass'

export default React.createClass ({
   	getInitialState() {
   		return {
   			footers: [{
   				pathname: '/',
   				text: '首页'
   			}, {
   				pathname: '/goods',
   				text: '校园购'
   			}, {
   				pathname: '/community',
   				text: '最美玩'
   			}, {
   				pathname: '/order',
   				text: '购物车'
   			}, {
   				pathname: '/user',
   				text: '我的'
   			}]
   		}
   	},

   	/* 给当前 tab 加 class 'active' */
   	isCurrent(index) {
   		// 取当前 pathname 的索引 currentIndex
   		let pathnameArr = [];
   		this.state.footers.map((item, index) => {
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
				{ this.state.footers.map((item, index) => {
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