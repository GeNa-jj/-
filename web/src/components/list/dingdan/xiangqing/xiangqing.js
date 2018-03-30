import React from 'react'

import './xiangqing.scss'
import HeaderComponent from '../../../header/headercomponent'

import http from '../../../../utils/httpclient'

export default class Xiangqing extends React.Component{
    componentWillMount(){
        http.get('getorder',{username: window.sessionStorage.getItem('username')}).then(res=>{   
            var data = res.data[res.data.length-1]
            this.setState({
                items: JSON.parse(data.items),
                orderNo: data.orderNo,
                status: data.status,
                username: data.username,
                address:data.address
            })
                 
                 
        })
    }
    componentDidMount(){
        $('.header_c').html('订单管理').css({fontWeight: 700,fontSize: '0.426667rem'});
        $('.header_r').text('')
    }
    state ={
        items: [],
        orderNo: null,
        status: null,
        username: null,
        address:null
    }
    componentDidUpdate(){
        var total = 0;
        $('.price').each((idx,item)=>{
                 
            total += $(item).text()*1
        });
        $('.total').text(total+9);
    }
    render(){    
        return(
                <div id="xiangqing">
                    <HeaderComponent a={this.props.router}/>
                    <div id="main">
                        <div className="dizhi">
                            <div className="dingwei"><img src="src/assets/imgs/dingwei.svg"/></div>
                            <div className="news">
                                <h3>{this.state.username}</h3>
                                <span className="weizhi">T-COLOR(体育东路28号(体育东华辉拉肠旁))元岗路T-COLOR(体育东路28号(体育东华辉拉肠旁))元岗路T-COLOR(体育东路28号(体育东华辉拉肠旁))元岗路</span>
                            </div>
                        </div>
                        <div className="mainNav"></div>
                        <div className="mainGoods">
                            <ul className="mainTop">
                               <li>商品</li>
                               <li>数量</li>
                               <li>价格</li>
                           </ul>
                           <ul className="mainbody">
                            {
                                this.state.items.map(item=>{
                                    return (
                                        <li key={item.id}>
                                            <span>{item.name}</span>
                                            <span>{item.n}</span>
                                            <span>￥<a className="price">{item.price}</a></span>
                                        </li>
                                        
                                    )
                                })
                            }
                                <li>
                                    <span>H外送费</span>
                                    <span>1</span>
                                    <span>￥9.0</span>
                                </li>
                           </ul>
                           <ul className="mainbottom">
                                <li>总价格</li>
                                <li>￥<span className="total"></span></li>
                           </ul>
                        </div>
                        <div className="mainNav"></div>
                        <dl className="mainNews">
                            <dt>订单信息</dt>
                            <dd>订单号：{this.state.orderNo}</dd>
                            <dd>下单时间：**********</dd>
                            <dd>配送时间：**********</dd>
                            <dd>支付方式：货到付款</dd>
                            <dd>备注：无</dd>
                        </dl>
                    </div>
                    <div id="foot">联系客服</div>
                </div>
            )
    }
}