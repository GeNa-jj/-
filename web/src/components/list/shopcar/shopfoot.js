import React from 'react'


import './shopfoot.scss'
export default class shopfootComponent extends React.Component{
		render(){
			return(
				<div className="pack-cart">
             		<span className="pack-cart-total">
             			￥
             			<em className="din-sm">209.0</em>
             		</span>

             		<button className="pack-cart-btn un">尚未选满</button>
            	</div>
				)
		}
}