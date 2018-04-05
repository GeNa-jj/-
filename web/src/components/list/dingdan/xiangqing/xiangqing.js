import React from 'react'

import './xiangqing.scss'
import HeaderComponent from '../../../header/headercomponent'

import http from '../../../../utils/httpclient'

export default class Xiangqing extends React.Component{
    componentWillMount(){
        http.get('getorder',{username: window.sessionStorage.getItem('username')}).then(res=>{
            console.log(res.data);  
            
            this.setState({
                items:res.data,
                username:res.data[0].username,
                address:res.data[0].address
            })
            // console.log(this.props.params);      
        })
    }
    componentDidMount(){
        $('.header_c').html('订单管理').css({fontWeight: 700,fontSize: '0.426667rem'});
        $('.header_r').text('');
        $('.foot1').text('已付款').attr('disabled','disabled');
    }
        
    state ={
        items: [],
        username: null,
        address:null
    }
    componentDidUpdate(){
        var total = 0;
        $('.price').each((idx,item)=>{
                 
            total += $(item).text()*1
        });
        $('.total').text(total+9);

        $('.foot1').text('已付款').attr('disabled','disabled');
        $('.foot0').text('确定付款');
        $('.foot1').css('opacity','0.3');
        
       
    }
    back(){
        this.props.router.goBack();
    }

    getStatus(){
        http.get('zhifu',{username: window.sessionStorage.getItem('username'),orderNo:this.props.params.orderNo}).then(res=>{
            console.log(res);
            console.log(res.data.changedRows);
            if(res.data.changedRows==1){
                window.alert('付款成功')
                $('#foot').text('已付款');
                $('#foot').css('opacity','0.3').attr('disabled','disabled');
            }else{
                window.alert('已经付款');
            }
        })
    }
    render(){
        var getres = [];
        var status = null;
        var address = [];
        var num = this.props.params.orderNo*1;
        this.state.items.map((item)=>{
            if(item.orderNo == num){
                status = item.status;
                getres=JSON.parse(item.items);
                address = item.address.split(' ');
            }

        })  
        return(
                <div id="xiangqing">
                    <div className="d_header">
                        <div className="d_header_l">
                        <button onClick={this.back.bind(this)}><i className="iconfont icon-xiangzuo"></i></button>
                        </div>
                        <div className="d_header_r">
                            <h1>订单管理</h1>
                        </div>
                    </div>
                    <div id="main">
                        <div className="dizhi">
                            <div className="dingwei"><img src="src/assets/imgs/dingwei.svg"/></div>
                            <div className="news">
                                <h3>{address[0]} {address[1]}</h3>
                                <span className="weizhi">{address[2]}</span>
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
                                getres.map((item)=>{
                                    return(
                                        <li key={item.id}>
                                          <span>{item.name}</span>
                                          <span>{item.n}</span>
                                          <span className="price">{item.price}</span>
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
                            <dd>订单号：{this.props.params.orderNo}</dd>
                            <dd>下单时间：**********</dd>
                            <dd>配送时间：**********</dd>
                            <dd>支付方式：货到付款</dd>
                            <dd>备注：无</dd>
                        </dl>
                    </div>
                    <button id="foot" className={'foot'+status} onClick = {this.getStatus.bind(this)}></button>
                </div>
            )
    }
}