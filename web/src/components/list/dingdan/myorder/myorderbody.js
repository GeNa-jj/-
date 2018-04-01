import React from 'react'
import {Link} from 'react-router'

import http from '../../../../utils/httpclient'

import './myorderbody.scss'

export default class Myorderbody extends React.Component{
    componentWillMount(){
        http.get('getorder',{username: window.sessionStorage.getItem('username')}).then(res=>{
            // console.log(res);
            if(res.data.length>0){
                $('.mainNone').hide();
                $('.mainbody').show();
                $('#myorderbody').css('background-color','#fff');
            }else{
                $('.mainNone').show();
                $('.mainbody').hide();
            }   
            this.setState({
                items:res.data.reverse() || []
            })

        })
    }
    state ={
        items:[]
    }
    componentDidUpdate(){
        $('.a1').text('已付款').css('backgroundColor','#28a745')
        $('.a0').text('待付款')  
    }
    getorderNo(orderNo,status){
        this.props.a.push(`/xiangqing/${orderNo}`);
    }
    render(){
        return(
            <div id="myorderbody">
                <div className="mainNone">
                    <img src="src/assets/imgs/noorder.png"/>
                </div>
                <ul className="mainbody">
                    {
                        this.state.items.map(item=>{
                            return (
                                    <li  key={Math.random()} onClick={this.getorderNo.bind(this,item.orderNo)}>
                                        <span>订单号：{item.orderNo}</span>
                                        <span className={'a'+item.status}></span>
                                    </li>
                                )
                        })
                    }
                </ul>
            </div>
        )
    }
}