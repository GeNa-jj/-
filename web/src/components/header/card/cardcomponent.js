import React from 'react'
import {Link,History} from 'react-router';

import './card.scss'

export default class CardComponent extends React.Component{
    use(){
        this.props.router.push('/list')
    }
    render(){
        return(
            <div className="card">
                <div className="d_header">
                    <div className="d_header_l">
                    <button><Link to="/"><i className="iconfont icon-xiangzuo"></i></Link></button>
                    </div>
                    <div className="d_header_r">
                        <h1>我的卡券</h1>
                    </div>
                </div>
                <div className="body">
                    <div className="bbox">
                        <ul>
                            <li className="sbox">
                                <div className="topImg">
                                    <img src="src/assets/imgs/card1.jpg" />
                                </div>
                                <div className="downImg">
                                    <div className="downImg_top">
                                        <div className="downImg_top1">生日礼物--官网任意消费得超级至尊6寸一个</div>
                                        <div className="downImg_top2" onClick={this.use.bind(this)}>使用</div>
                                    </div>
                                    <div className="downImg_botton">有效期: 2018年03月01日-2018年03月31日</div>
                                </div>
                            </li>
                            <li className="sbox">
                                <div className="topImg">
                                    <img src="src/assets/imgs/card2.jpg" />
                                </div>
                                <div className="downImg">
                                    <div className="downImg_top">
                                        <div className="downImg_top1">入会礼 官网外送订餐产品满49元立减10元</div>
                                        <div className="downImg_top2" onClick={this.use.bind(this)}>使用</div>
                                    </div>
                                    <div className="downImg_botton">
                                        有效期: 2018年03月28日-2018年05月26日
                                    </div>
                                </div>
                            </li>
                            <li className="ss">
                                查看过期卡券
                                <i className="iconfont icon-xiangyou"></i>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}