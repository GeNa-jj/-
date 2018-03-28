import React from 'react'


import './dingdanfoot.scss'
export default class dingdanComponent extends React.Component{
		render(){
			return(
				<div className="footer_f flex">
             		<div className="total flex-l">
             			<span className="totle-money din din-sm">￥69.0</span>
             			<span className="deli-money din">(外送费￥0.0)</span>
             		</div>
             		<div className="submit">提交订单</div>
            	</div>
				)
		}
}