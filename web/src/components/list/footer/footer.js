import React from 'react'
import { Link , History} from 'react-router'

import http from '../../../utils/httpclient.js'

import './footer.scss'

export default class Footer extends React.Component{
    componentWillReceiveProps(newProps){
        if(!window.sessionStorage.getItem('username')){
            this.props.a.push('/login');
        }else{
            http.post('productId',{id:newProps.id}).then((res)=>{
                if(res[0]){
                    var arr = this.state.dataset
                    for(var i=0;i<arr.length;i++){
                        if(res[0].id==arr[i].id){
                            arr[i].n++;
                            this.setState({
                                dataset:this.state.dataset
                            }) 
                            return
                        }
                        
                    }
                    res[0].n = 1;
                    arr.push(res[0]);
                    this.setState({
                        dataset:arr
                    })       
                }      
            });     
        }
    }
    state = {
        i:0,
        dataset:[]
    }
    showup(){
        this.state.i++;
        if(this.state.i % 2 !=0){
            $(".footergoods").stop(true,true).animate({height:"5.333333rem"});
            $(".modalShade").stop(true,true).animate({height:"100%"});
        }else{
            $(".footergoods").stop(true,true).animate({height:"0rem"});
            $(".modalShade").stop(true,true).animate({height:"0"});
        }
        
    }
    hide(){
        $(".modalShade").stop(true,true).animate({height:"0"});
        $(".footergoods").stop(true,true).animate({height:"0rem"});
        this.state.i++;
    }
    jia(price,e){
        var n = $(e.target).prev().text();
        n++;
        $(e.target).prev().text(n);
        $(e.target).parent().prev().find('span').text(price*n);  
        this.total();
        var id = ($(e.target).closest('li').attr('id'));
        for(var i=0;i<this.state.dataset.length;i++){
            if(this.state.dataset[i].id==id){
                this.state.dataset[i].n = n
            }
        }

    }
    jian(price,e){
        var n = $(e.target).next().text();
        if(n<=1){
            n=1;
        }else{
            n--;
        }
        $(e.target).next().text(n);
        $(e.target).parent().prev().find('span').text(price*n);
        this.total();
        var id = ($(e.target).closest('li').attr('id'));
        for(var i=0;i<this.state.dataset.length;i++){
            if(this.state.dataset[i].id==id){
                this.state.dataset[i].n = n
            }
        }      
             
    }
    

    del(e){
        // $(e.target).closest('li').remove();
        this.total();
        var id = ($(e.target).closest('li').attr('id'));
        var arr = []
        for(var i=0;i<this.state.dataset.length;i++){
            if(this.state.dataset[i].id!=id){
                arr.push(this.state.dataset[i])
            }
        }
        this.setState({
            dataset: arr
        })
             
    }
    delall(){
        // $('.datalist').remove();
        this.total();
        this.setState({
            dataset: []
        })
    }
    total(){   
        var total = 0;
        $('.price').each(function(idx,item){
            total += $(item).find('span').text()*1
        });
        if(total==0){
            $('.total').children('span').find('span').text(total);
        }else{
            $('.total').children('span').find('span').text(total+9);
        }
        var n = 0;
        $('.number').each(function(idx,item){
            n += $(item).text()*1;
        });
        $('.totalnum').text(n);

    }

    componentDidUpdate(){   
        this.total();
    }
    topay(){
        var items = this.state.dataset;
        // window.sessionStorage.removeItem('items');
        window.sessionStorage.setItem('items',JSON.stringify(items)); 
        if(this.state.dataset==''){
            window.alert('购物车为空');
        }else{
            this.props.a.push('/dingdan')
        }
                 
    }
    render(){
            // console.log(this.state.dataset)
            let html = (
                <div className="foot">
                    <div className="modalShade" onClick={this.hide.bind(this)}></div>
                    <div id="footer">
                        <div className="footergoods" >
                            <div className="footercontent">
                                <div className="footerTop">
                                    <div className="footerRight">
                                        <div className="footerTitle">购物盒</div>
                                        <div className="footerclearCar" onClick={this.delall.bind(this)}>清空购物车</div>
                                    </div>
                                </div>
                                <div className="footerProduct">
                                    <div>
                                        <ul>
                                            <li>外送费9.0元</li>
                                    {
                                        this.state.dataset.map((item)=>{
                                            return(
                                                    <li key={Math.random()} id={item.id} className="datalist">
                                                        <div className="footerFlex">
                                                            <i onClick={this.del.bind(this)}>&times;</i>
                                                            <div className="footerName">
                                                               {item.name}
                                                            </div>
                                                            <div className="price">￥<span ref="sale">{item.price*item.n}</span></div>
                                                            <div className="shuliang">
                                                                <span className="jian" onClick={this.jian.bind(this,item.price)}>-</span>
                                                                <span className="number">{item.n}</span>
                                                                <span className="jia" onClick={this.jia.bind(this,item.price)}>+</span>
                                                            </div>
                                                        </div>
                                                    </li>
                                                )
                                        })
                                    }
                                                    </ul>
                                            </div>
                                </div>
                            </div>
                        </div>
                        <div className="footerall" onClick={this.showup.bind(this)}>
                            <div>
                                <div className="footerLeft">
                                    <i className="iconfont icon-hezi101"></i>
                                    <span className="totalnum">0</span>
                                </div>
                            <div className="footerline">
                                <div className="total">
                                    <span>￥<span ref="price">0</span>元</span>
                                    <p style={{marginLeft: '0.066667rem'}}>含9.0元外送费</p>
                                </div>
                            </div>
                            <div className="footerRight"><a onClick={this.topay.bind(this)}>去结算</a></div>
                            </div> 
                        </div>
                    </div>
                </div>
            )
        return this.props.show ? html : null
    }
}