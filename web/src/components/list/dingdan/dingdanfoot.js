import React from 'react'

import http from '../../../utils/httpclient'

import './dingdanfoot.scss'
export default class dingdanComponent extends React.Component{
  order(){
        var items = window.sessionStorage.getItem('items');
        var order = {};
        order.items = items;
        order.username = window.sessionStorage.getItem('username')
        var num = new Date();
        var n = num.getFullYear();
        var y = num.getMonth();
        var r = num.getDate();
        var s=num.getHours();
        var f=num.getMinutes();
        var m=num.getSeconds();
        var orderNo = ''+n+y+r+s+f+m
        order.orderNo = orderNo;
        order.address = '暂无此功能';
        order.status = 0;
        http.post('order',order).then(res=>{
              if(res.status){
                    window.alert('下单成功');
                    this.props.a.push('/');
              }else{
                    window.alert('下单失败');
              }
        }).catch(error=>{
              window.alert(error);
        });                 
  }
	render(){
		return(
			<div className="footer_f flex">
     		<div className="total flex-l">
     			<span className="totle-money din din-sm">￥69.0</span>
     			<span className="deli-money din">(外送费￥9.0)</span>
     		</div>
     		<div className="submit" onClick={this.order.bind(this)}>提交订单</div>
	   </div>
		)
	}
}