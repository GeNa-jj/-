import React from 'react'


import './dingdanhead.scss'
export default class dingdanComponent extends React.Component{
        back(){
            this.props.a.goBack();    
        }
		render(){
			return(
				<header>
             		<a className="xn-head" onClick={this.back.bind(this)}><i className="iconfont icon-xiangzuo"></i></a>

             		<div className="title">确定订单与结算</div>
            	</header>
				)
		}
}