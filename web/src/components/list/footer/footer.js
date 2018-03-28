import React from 'react'
import { Link , History} from 'react-router'

import http from '../../../utils/httpclient.js'

import './footer.scss'

export default class Footer extends React.Component{
    componentWillReceiveProps(){
        http.post('productId',{id:this.props.id}).then((res)=>{
            this.setState({
                dataset:res
            })
        })
    }
    state = {
        i:0,
        dataset:[]
    }
    showup(){
        this.state.i++;
        if(this.state.i % 2 !=0){
            $(".footergoods").stop(true,true).animate({height:"310px"});
        }else{
            $(".footergoods").stop(true,true).animate({height:"0rem"});
        }
        
    }
    jia(){
        this.refs.number.innerText++;        
    }
    render(){
            let html = (
                <div id="footer">
                    <div className="footergoods" >
                        <div className="footercontent">
                            <div className="footerTLeft">
                                 <i className="iconfont icon-hezi101"></i>
                            </div>
                            <div className="footerTop">
                                <div className="footerRight">
                                    <div className="footerTitle">购物盒包含</div>
                                    <div className="footerclearCar">清空购物车</div>
                                </div>
                            </div>
                            <div className="footerProduct">
                                {
                                    this.state.dataset.map((item)=>{
                                        return(
                                        <div key={item.id}>
                                                <ul>
                                                    <li>外送费9.0元</li>
                                                    <li>
                                                        <div className="footerFlex">
                                                            <i>&times;</i>
                                                            <div className="footerName">
                                                               {item.name}
                                                            </div>
                                                            <div className="price">￥<span ref="sale">{item.price}</span></div>
                                                            <div className="shuliang">
                                                                <span className="jian">-</span>
                                                                <span className="number" ref="number">{this.state.dataset.length}</span>
                                                                <span className="jia" onClick={this.jia.bind(this)}>+</span>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                        </div>)
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <div className="footerall" onClick={this.showup.bind(this)}>
                        {
                            this.state.dataset.map((item)=>{
                                return(
                                    <div key={item.id}>
                                        <div className="footerLeft">
                                            <i className="iconfont icon-hezi101"></i>
                                            <span className="totalnum">{this.state.dataset.length}</span>
                                        </div>
                                    <div className="footerline">
                                        <div className="total">
                                            <span>￥<span ref="price">{item.price*1+9}</span>元</span>
                                            <p>含9.0元外送费</p>
                                        </div>
                                    </div>
                                    <div className="footerRight"><Link to='/dingdan'>去结算</Link></div>
                                    </div> 
                                )
                            })
                        }
                    </div>
                </div>
            )
        return this.props.show ? html : null
    }
}